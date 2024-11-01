// import {register} from "./apis.ts";

import axios from "axios";
import {createPublicApiClient} from "@halo-dev/api-client";
import cloud from '@nanxu/cloud'


// export const createImplSearchService = () => {
//     const impl = new SearchService({
//         search: (option) => {
//             register('hello')
//             console.log(option);
//             debugger
//             return Mono.just({
//                 keyword: "test"
//             });
//         }
//     });
//     return impl;
// };

export const fetcherBaidu = async () => {
    const res = await axios.post("http://127.0.0.1:1111/api/auth/login")
            .catch(e => {
                console.log('err', e);
            });
    console.log(res);
    return res;
};

const axiosInstance = axios.create({
    baseURL: "https://www.mvvm.io",
    withCredentials: true
})

export const fetchPosts = async () => {
    await createPublicApiClient(axiosInstance).content.post.queryPosts({}).then(response => {
        console.log(response);
        return response;
    });
};

export const startCloud =  () => {
    cloud.start()
};

