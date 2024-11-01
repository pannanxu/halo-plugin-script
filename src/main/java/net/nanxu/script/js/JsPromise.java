package net.nanxu.script.js;

import java.util.function.Consumer;
import org.graalvm.polyglot.Value;

/**
 * JsPromise.
 *
 * @author: P
 **/
public interface JsPromise {

    static JsPromise of(Value promise) {
        return new JsPromise() {
            @Override
            public JsPromise then(Consumer<Object> callback) {
                promise.invokeMember("then", callback);
                return this;
            }

            @Override
            public JsPromise catchError(Consumer<Object> callback) {
                promise.invokeMember("cache", callback);
                return this;
            }

            @Override
            public JsPromise finallyDo(Consumer<Object> callback) {
                promise.invokeMember("finally", callback);
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

    default JsPromise finallyDo(Consumer<Object> callback) {
        return this;

    }
}
