package net.nanxu.script;

import java.util.HashMap;
import java.util.Map;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * AxiosRequestAdapter.
 *
 * @author: P
 **/
public class AxiosRequestAdapter {

    public Response post(String url, Object data) {
        System.out.println("post: " + url + ", data: " + data);
        return new Response()
            .setData((Map.of("success", true, "data", "OK")));
    }

    @Data
    @Accessors(chain = true)
    public static class Response {
        private Object data;
        private Integer status = 200;
        private String statusText = "OK";
        private Map<String, String> headers = new HashMap<>();
        private Map<String, String> config = new HashMap<>();
        private Map<String, String> request;
    }
}
