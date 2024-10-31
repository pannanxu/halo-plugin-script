// import {Foo} from '../commons/foo.mjs';
//
// const foo = new Foo();
// console.log(foo.square(42));
//
// export function start(params) {
//     console.log(params)
// }
//
const start = async (params) => {
    console.log(params)
    return 'done'
}

export const end = async (params) => {
    const result = await start('stop')
    console.log(result, params)
    // await fetch('http://baidu.com').then(res => {
    //     console.log(res)
    // })
    services.getName1().map(res => {
        console.log('getName1',res)
    }).block()
    return 'ok'
}



// services.callback('Hello from JS');
// services.callback('1');
// services.callback('2');
// services.callback('3');