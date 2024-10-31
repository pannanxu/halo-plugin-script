
export function using<T>(path: string) {
    // @ts-ignore
    return Java.type(path) as T
}
export function extend<T>(type: any) {
    // @ts-ignore
    return Java.extend(type) as T
}