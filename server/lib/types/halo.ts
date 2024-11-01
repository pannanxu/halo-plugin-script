
declare global {

    export class Mono<T = any> {
        static just<T>(value: T): Mono<T> ;
    }

    export class SearchService<T = any> {

        constructor(_config: SearchServiceConfig)

    }

    export interface SearchOption {
        // 根据实际需要添加属性
        [key: string]: any;
    }

    export interface SearchResult {
        keyword: string;
        // 其他可能的结果字段
    }

    export type SearchFunction = (option: SearchOption) => Mono<SearchResult>;

    export interface SearchServiceConfig {
        search: SearchFunction;
    }


}