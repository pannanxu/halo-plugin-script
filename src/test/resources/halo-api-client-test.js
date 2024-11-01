import o from "axios";
import { createPublicApiClient as e } from "@halo-dev/api-client";
import r from "@nanxu/cloud";
const l = async () => {
    const t = await o.post("http://127.0.0.1:1111/api/auth/login").catch((s) => {
        console.log("err", s);
    });
    return console.log(t), t;
}, c = o.create({
    baseURL: "https://www.mvvm.io",
    withCredentials: !0
}), p = async () => {
    console.log('开始请求halo')
    debugger
    return await e(c).content.post.queryPosts()
            .then((t) => {
                console.log(t)
                return t;
            })
            .catch(err => {
                console.log('请求异常: ', err)
            });
}, u = () => {
    r.start();
};
export {
    p as fetchPosts,
    l as fetcherBaidu,
    u as startCloud
};
