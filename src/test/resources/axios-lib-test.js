import './commons/global.js'

const a = async () => {
    const o = await axios.post("http://127.0.0.1:1111/api/auth/login").catch((t) => {
        console.log("err", t);
    });
    return console.log(o), o;
};
export {
    a as fetcherBaidu
};
