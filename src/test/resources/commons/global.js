// Env
globalThis.process = {
    env: {
        NODE_ENV: 'production',
        password: 'mypwd123'
    }
}

// Core
// import fetch, {Headers, Response, Request} from './node-fetch/index.js'
import axios from './axios/index.js'
import './axios/adapter.js'
globalThis.axios = axios;

