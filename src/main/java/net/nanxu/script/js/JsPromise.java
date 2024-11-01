package net.nanxu.script.js;

import java.util.concurrent.atomic.AtomicReference;
import java.util.function.Consumer;
import org.graalvm.polyglot.Value;

/**
 * JsPromise.
 *
 * @author: P
 **/
public interface JsPromise {

    static JsPromise of(Value promise) {
        AtomicReference<Value> reference = new AtomicReference<>(promise);
        return new JsPromise() {
            @Override
            public JsPromise then(Consumer<Object> callback) {
                reference.get().invokeMember("then", callback);
                // reference.set(reference.get().invokeMember("then", callback));
                return this;
            }

            @Override
            public JsPromise catchError(Consumer<Object> callback) {
                reference.get().invokeMember("catch", callback);
                // reference.set(reference.get().invokeMember("catch", callback));
                return this;
            }

            @Override
            public JsPromise finallyDo(Runnable callback) {
                // com.oracle.truffle.js.runtime.objects.JSDynamicObject
                reference.get().invokeMember("finally", callback);
                // reference.set(reference.get().invokeMember("finally", callback));
                return this;
            }
        };
    }

    default JsPromise then(Consumer<Object> callback) {
        return this;
    }

    default JsPromise catchError(Consumer<Object> callback) {
        return this;
    }

    default JsPromise finallyDo(Runnable callback) {
        return this;

    }
}
