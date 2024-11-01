import axios from "./index.js";

axios.defaults.adapter = (config) => {
    // TODO 基于Java的api发起请求
    return new Promise((resolve, _reject) => {
        console.log('config', JSON.stringify(config))
        // @ts-ignore
        const resp = request.post(config.url, config.data)
        resolve({
            data: resp.getData(),
            status: resp.getStatus(),
            statusText: resp.getStatusText(),
            headers: resp.getHeaders(),
            config,
            request: {}
        })
    })
};
