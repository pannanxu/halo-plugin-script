import {resolve} from "path";
import {defineConfig} from "vite";
import Dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        Dts({
            tsconfigPath: "./tsconfig.json",
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "entry/index.ts"),
            name: "CloudSdk",
            formats: ["es"],
            fileName: (format) => `cloud-sdk.${format}.js`,
        },
        rollupOptions: {
            external: ["axios"],
            output: {
                globals: {
                    axios: "axios",
                },
                exports: "named",
            },
        }
    },
});