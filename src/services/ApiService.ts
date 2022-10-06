import {htDomain, website, websiteIdState} from "../stores/configStore";
import {page} from "../stores/pageStore";
import AuthService from "./AuthService";
import { objToQueryString } from "../helpers/stateless/query";

interface CallOptions<T> {

    customUrl?: string,

    method: 'post' | 'get',
    endpoint?: string,
    data?: object | FormData,

    complete?: () => void,
    success?: (data: T) => void,
    error?: (error: string | null) => void,
}

export function getEndpointUrl(endpoint: string) {
    return htDomain.get()+ "/api/embed/v3/" + (websiteIdState.get()) + endpoint;
}

export function getPageApiEndpointUrl(endpoint: string) {
    const pageId = page.get().id
    return getEndpointUrl(`/page/${pageId}` + endpoint)
}

export default class ApiService {

    static call<T>(opt: CallOptions<T>) {

        let url = opt.customUrl || getEndpointUrl(opt.endpoint as string);

        if (opt.method === 'get' && opt.data) {
            url += "?" + objToQueryString(opt.data)
        }

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
        xhr.open(opt.method, url)

        if (!(opt.data instanceof FormData)) {
            xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        }

        const token = AuthService.getToken();
        if (token) {
            xhr.setRequestHeader('X-Token', token);
        }

        let data;
        if (opt.method === 'post') {
            data = opt.data instanceof FormData ? opt.data : JSON.stringify(opt.data);
        }

        xhr.send(data)

        return xhr
    }

    static callPageApi<T>(opt: CallOptions<T>) {
        const pageId = page.get().id
        opt.endpoint = `/page/${pageId}` + opt.endpoint;
        return ApiService.call(opt)
    }

}
