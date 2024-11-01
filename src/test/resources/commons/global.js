// Env
globalThis.process = {
    env: {
        NODE_ENV: 'production',
        password: 'mypwd123'
    }
}

// Core
import './axios/adapter.js'

