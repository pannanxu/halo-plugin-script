package net.nanxu.script.js;

import java.io.File;
import java.io.IOException;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;
import org.graalvm.polyglot.io.IOAccess;

/**
 * JavaScriptEngineContext.
 *
 * @author: P
 **/
public class JavaScriptEngineContext {
    
    private final Context ctx;

    public JavaScriptEngineContext(Context ctx) {
        this.ctx = ctx;
    }

    public JavaScriptEngineContext() {
        this.ctx = Context.newBuilder("js")
            .allowIO(IOAccess.ALL)
            .allowHostAccess(HostAccess.ALL)
            .allowHostClassLoading(true)
            .allowHostClassLookup(s -> true)
            .allowAllAccess(true)
            .option("js.esm-eval-returns-exports", "true")
            .option("engine.WarnInterpreterOnly", "false")
            .build();
    }

    public JavaScriptEngineContext addMember(String name, Object value) {
        ctx.getBindings("js").putMember(name, value);
        return this;
    }

    public Source createMainSource(String code) {
        try {
            return  Source.newBuilder("js", code, "main.mjs").mimeType("application/javascript+module").build();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public Source createSourcePath(String path) {
        try {
            return  Source.newBuilder("js", new File(path)).mimeType("application/javascript+module").build();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public Value eval(Source source) {
        return ctx.eval(source);
    }

    public Value evalCode(String code) {
        Source source = createMainSource(code);
        return ctx.eval(source);
    }

    public Value invokeMember(Value value, String identifier, Object... arguments) {
        return value.invokeMember(identifier, arguments);
    }
    
}
