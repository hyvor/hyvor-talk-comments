import {htDomain, website, websiteIdState} from "../stores/configStore";
import {page} from "../stores/pageStore";
import AuthService from "./AuthService";

interface CallOptions<T> {

    method: 'post' | 'get',
    endpoint: string,
    data: object | FormData,

    complete?: () => void,
    success?: (data: T) => void,
    error?: (error: string | null) => void,
}

export default class ApiService {

    static call<T>(opt: CallOptions<T>) {

        let url = htDomain.get() + "/api/embed/v3/" + (websiteIdState.get()) + opt.endpoint

        const xhr = new XMLHttpRequest
        xhr.onreadystatechange = function() {
            if (this.readyState === 4) {
                opt.complete && opt.complete()

                if (this.status === 200) {
                    const data = JSON.parse(this.responseText) as T
                    opt.success && opt.success(data)
                } else {
                    let error = null;
                    try {
                        error = JSON.parse(this.responseText).error;
                    } catch {}
                    opt.error && opt.error(error)
                }
            }
        }
        xhr.open("POST", url)

        if (!(opt.data instanceof FormData)) {
            xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        }

        const token = AuthService.getToken();
        if (token) {
            xhr.setRequestHeader('X-Token', token);
        }

        xhr.send(opt.data instanceof FormData ? opt.data : JSON.stringify(opt.data))

        return xhr
    }

    static callPageApi<T>(opt: CallOptions<T>) {
        const pageId = page.get().id
        opt.endpoint = `/page/${pageId}` + opt.endpoint;
        return ApiService.call(opt)
    }

}
