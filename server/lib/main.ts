// import {register} from "./apis.ts";

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