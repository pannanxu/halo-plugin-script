package net.nanxu.script;

import java.util.concurrent.atomic.AtomicReference;
import net.nanxu.script.js.JavaScriptEngineContext;
import net.nanxu.script.js.JsPromise;
import org.graalvm.polyglot.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TestController.
 *
 * @author: P
 **/
@RestController
@RequestMapping("/api/js")
public class TestController {

    @GetMapping("/run")
    public String test() {
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
        AtomicReference<String> reference = new AtomicReference<>();
        JsPromise.of(started).then(result -> {
            System.out.println("started then: " + result);
            reference.set(result.toString());
        });

        Value stopped = context.invokeMember(value, "end", "world");
        JsPromise.of(stopped).then(result -> {
            System.out.println("stopped then: " + result);
        });

        return "Hello World" + reference.get();
    }
}
