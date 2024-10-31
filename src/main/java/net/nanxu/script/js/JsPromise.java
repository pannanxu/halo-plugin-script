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
            public void then(Consumer<Object> callback) {
                promise.invokeMember("then", callback);
            }

            @Override
            public void catchError(Consumer<Object> callback) {
                promise.invokeMember("cache", callback);
            }

            @Override
            public void finallyDo(Consumer<Object> callback) {
                promise.invokeMember("finally", callback);
            }
        };
    }

    default void then(Consumer<Object> callback) {

    }

    default void catchError(Consumer<Object> callback) {

    }

    default void finallyDo(Consumer<Object> callback) {

    }
}
