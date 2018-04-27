/**
 * Description:网络请求工具类
 *
 * Author: zoe
 * Time: 2018/4/27 0027
 */
export default class NetUtil {

    /**
     *url :请求地址
     *data:参数
     *callback:回调函数
     */
    static postForm(url, params, success, failure) {
        const requestOptional = {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body : 'data=' + params + ''
        };

        fetch(url, requestOptional)
            .then(this.checkStatus)
            .then((response) => response.json())
            .then((json) => success(json))
            .catch((error) => {
                console.log("请求url:" + url + "\n出错日志：" + error);
                failure(error);
            });
    }

    /**
     *url :请求地址
     *data:参数(Json对象)
     *callback:回调函数
     */
    static postJson(url, params, success, failure) {

        console.log("请求url:" + url + "\n参数：" + JSON.stringify(params));

        const requestOptional = {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                //json形式
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(params)
        };

        fetch(url, requestOptional)
            .then(this.checkStatus)
            .then((response) => response.json())
            .then((json) => success(json))
            .catch((error) => {
                console.log("请求url:" + url + "\n出错日志：" + error);
                failure(error);
            });
    }

    //get请求
    /**
     *url :请求地址
     *callback:回调函数
     */
    static get(url, params, success, failure) {

        console.log("请求url:" + url + "\n参数：" + params);

        fetch(url, {
            method : 'GET',
            body : params
        })
            .then(this.checkStatus)
            .then((response) => response.json())
            .then((json) => success(json))
            .catch((error) => {
                console.log("请求url:" + url + "\n出错日志：" + error);
                failure(error);
            });
    }

    /**
     * fetch请求对某些错误http状态不会reject
     * 这主要是由fetch返回promise导致的，
     * 因为fetch返回的promise在某些错误的http状态下如400、500等不会reject，
     * 相反它会被resolve；只有网络错误会导致请求不能完成时，fetch 才会被 reject；
     * 所以一般会对fetch请求做一层封装
     *
     * @param response
     * @returns {*}
     */
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}