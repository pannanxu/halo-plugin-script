package net.nanxu.script;

import static org.mockito.Mockito.when;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import lombok.Builder;
import lombok.Data;
import net.nanxu.script.js.JavaScriptEngineContext;
import net.nanxu.script.js.JsPromise;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;
import org.graalvm.polyglot.io.IOAccess;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import run.halo.app.core.extension.content.Post;
import run.halo.app.extension.ReactiveExtensionClient;
import run.halo.app.infra.utils.JsonUtils;
import run.halo.app.search.SearchOption;
import run.halo.app.search.SearchService;

@ExtendWith(MockitoExtension.class)
class JavaScriptEngineContextTest {

    @Mock
    ReactiveExtensionClient client;


    @Test
    void simpleTest() {
        JavaScriptEngineContext context = new JavaScriptEngineContext();
        // language=JavaScript
        Value value = context.evalCode("""
            export const start = async (params) => {
                console.log(params)
                return 'started'
            }
            export const end = async (params) => {
                console.log(params)
                return 'stopped'
            }

            """);


        // https://stackoverflow.com/questions/78961435/how-to-wait-using-graalvm-in-java-in-js-method-in-a-api-call
        Value started = context.invokeMember(value, "start", "hello");
        JsPromise.of(started).then(result -> {
            System.out.println("started then: " + result);
        });

        Value stopped = context.invokeMember(value, "end", "world");
        JsPromise.of(stopped).then(result -> {
            System.out.println("stopped then: " + result);
        });

    }

    @Test
    void testMono() throws InterruptedException {
        JavaScriptEngineContext context = new JavaScriptEngineContext();
        context.addMember("services", new TestService());
        // language=JavaScript
        Value value = context.evalCode("""
            export const start = async (params) => {
                console.log(params)
                const name = services.getName().block()
                console.log('name', name)
                return 'started'
            }
            export const end = async (params) => {
                console.log(params)
                return 'stopped'
            }
            """);

        Value started = context.invokeMember(value, "start", "hello");
        JsPromise.of(started).then(result -> {
            System.out.println("started then: " + result);
        });

        Value stopped = context.invokeMember(value, "end", "world");
        JsPromise.of(stopped).then(result -> {
            System.out.println("stopped then: " + result);
        });

    }

    @Test
    void testFlux() throws InterruptedException {
        JavaScriptEngineContext context = new JavaScriptEngineContext();
        context.addMember("services", new TestService());
        // language=JavaScript
        Value value = context.evalCode("""
            export const start = async (params) => {
                console.log(params)
                const names = services.getFluxName().collectList().block()
                console.log('names', names)
                return 'started'
            }
            """);

        Value started = context.invokeMember(value, "start", "hello");
        JsPromise.of(started).then(result -> {
            System.out.println("started then: " + result);
        });
    }

    @Test
    void testReactiveExtensionClient() {
        Post post = new Post();
        Post.PostSpec spec = new Post.PostSpec();
        spec.setTitle("Hello JS Engine");
        post.setSpec(spec);
        when(client.get(Post.class, "test")).thenReturn(Mono.just(post));

        JavaScriptEngineContext context = new JavaScriptEngineContext();
        context.addMember("client", client);
        context.addMember("JSON", new JSON());
        // language=JavaScript
        Value value = context.evalCode("""
            const Post = Java.type('run.halo.app.core.extension.content.Post');
            export const fetchPost = async (name) => {
                const post = client.get(Post.class, name).block()
                console.log('post', JSON.stringify(post))
                post.getSpec().setTitle('Hello JS Engine Changes...')
                return post
            }
            """);

        Value postValue = context.invokeMember(value, "fetchPost", "test");
        JsPromise.of(postValue).then(result -> {
            System.out.println("fetchPost then: " + result);
        });

    }


    @Test
    void testJsImpl() {
        JavaScriptEngineContext context = new JavaScriptEngineContext();
        // language=JavaScript
        Value value = context.evalCode("""
            const SearchService = Java.extend(Java.type('net.nanxu.script.JavaScriptEngineContextTest.TestSearchService'));
            export const createImplSearchService =  () => {
                const impl = new SearchService({
                    search: (option) => {
                        console.log(option)
                        return 'success'
                    }
                })
                return impl
            }
            export const service = new SearchService({
                search: (option) => {
                    console.log(option)
                    return 'success'
                }
            })
            """);
        Value searchService = context.invokeMember(value, "createImplSearchService");
        System.out.println(searchService.as(TestSearchService.class).search(new SearchOption()));
        System.out.println(
            value.getMember("service").as(TestSearchService.class).search(new SearchOption()));
    }

    @Test
    void testJsImplHaloInterface() {
        JavaScriptEngineContext context = new JavaScriptEngineContext();
        // language=JavaScript
        Value value = context.evalCode("""
            const Mono = Java.type('reactor.core.publisher.Mono');
            const SearchService = Java.extend(Java.type('run.halo.app.search.SearchService'));
            export const createImplSearchService =  () => {
                const impl = new SearchService({
                    search: (option) => {
                        console.log(option)
                        return Mono.just({
                            keyword: 'test'
                        })
                    }
                })
                return impl
            }
            """);
        Value searchService = context.invokeMember(value, "createImplSearchService");
        System.out.println(
            searchService.as(SearchService.class).search(new SearchOption()).block());
    }

    @Test
    void testJsHttpEndpoints() throws InterruptedException {
        JavaScriptEngineContext context = new JavaScriptEngineContext();
        TestEndpointProvider provider = new TestEndpointProvider();
        context.addMember("endpoints", provider);
        // language=JavaScript
        context.evalCode("""
            let value = 1
            const Http = Java.type('net.nanxu.script.JavaScriptEngineContextTest.Http');
            endpoints.register(Http.builder().path('/api').handle((e) => {
                value += 1;
                console.log(e, value)
                return e + 'ok'
            }).build())
            """);

        provider.getEndpoints().forEach(e -> {
            System.out.println(e.handle.apply("test"));
        });

        new Thread(() -> {
            provider.getEndpoints().forEach(e -> {
                System.out.println(e.handle.apply("test"));
            });
        }).start();

        Thread.sleep(1000);
    }

    @Test
    void testPluginImportCommons() throws URISyntaxException {
        String filePath = "plugin1/main.mjs";
        String pluginPath = this.getClass().getClassLoader().getResource(filePath).getFile();
        JavaScriptEngineContext context = new JavaScriptEngineContext(Context.newBuilder("js")
            .allowIO(IOAccess.ALL)
            .allowHostAccess(HostAccess.ALL)
            .allowHostClassLoading(true)
            .allowHostClassLookup(s -> true)
            .allowAllAccess(true)
            .option("js.esm-eval-returns-exports", "true")
            .option("engine.WarnInterpreterOnly", "false")
            .build());
        Source source = context.createSourcePath(pluginPath);
        context.eval(source);
    }

    public interface TestSearchService {

        /**
         * Perform search.
         *
         * @param option search option must not be null
         * @return search result
         */
        String search(SearchOption option);

    }

    public static class TestEndpointProvider {
        private final List<Http> endpoints = new ArrayList<>();

        public void register(Http endpoint) {
            endpoints.add(endpoint);
        }

        public List<Http> getEndpoints() {
            return endpoints;
        }

    }

    @Data
    @Builder
    public static class Http {
        private String path;
        private Function<String, String> handle;
    }

    public static class TestService {
        public Mono<String> getName() {
            System.out.println("getName...");
            return Mono.defer(() -> {
                try {
                    Thread.sleep(10000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                return Mono.just("hello");
            });
        }

        public Flux<String> getFluxName() {
            System.out.println("getFluxName...");
            return Flux.just("zhangsan", "lisi", "wangwu");
        }
    }

    public static class JSON {
        public String stringify(Object object) {
            return JsonUtils.objectToJson(object);
        }

        public Object parse(String json) {
            return JsonUtils.jsonToObject(json, Object.class);
        }
    }
}