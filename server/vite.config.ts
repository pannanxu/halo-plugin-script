import {resolve} from "path";
import {defineConfig} from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            name: "MyLib",
            // 将添加适当的扩展名后缀
            fileName: "my-lib",
        },
        rollupOptions: {
            external: ['axios', "@nanxu/cloud", "@halo-dev/api-client"],
            output: {
                globals: {
                    axios: "axios",
                    "@nanxu/cloud": "cloud",
                    "@halo-dev/api-client": "apiClient"
                },
                exports: "named",
            },
        }
    },
});