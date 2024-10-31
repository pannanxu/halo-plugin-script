import {register} from "./apis.ts";

export const createImplSearchService = () => {
    const impl = new SearchService({
        search: (option) => {
            register('hello')
            console.log(option);
            debugger
            return Mono.just({
                keyword: "test"
            });
        }
    });
    return impl;
};