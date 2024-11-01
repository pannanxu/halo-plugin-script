package net.nanxu.script;

import net.nanxu.script.js.JavaScriptEngineContext;
import net.nanxu.script.js.JsPromise;
import org.graalvm.polyglot.Value;
import org.springframework.stereotype.Component;
import run.halo.app.plugin.BasePlugin;
import run.halo.app.plugin.PluginContext;

/**
 * <p>Plugin main class to manage the lifecycle of the plugin.</p>
 * <p>This class must be public and have a public constructor.</p>
 * <p>Only one main class extending {@link BasePlugin} is allowed per plugin.</p>
 *
 * @author guqing
 * @since 1.0.0
 */
@Component
public class StarterPlugin extends BasePlugin {

    public StarterPlugin(PluginContext pluginContext) {
        super(pluginContext);
    }

    @Override
    public void start() {
        System.out.println("插件启动成功！");
    }

    @Override
    public void stop() {
        System.out.println("插件停止！");
    }

    public static void main(String[] args) {
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
}
