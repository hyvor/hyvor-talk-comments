import {htDomain, websiteId} from "../stores/configStore";
import objToQueryString from "../helpers/objToQueryString";

interface CallOptions<T> {
    method: 'post' | 'get',
    endpoint: string,
    data: object | FormData,

    complete?: () => void,
    success?: (data: T) => void,
    error?: (error: string | null) => void
}

export default class ApiService {

    static call<T>(opt: CallOptions<T>) {

        let url = htDomain.get() + "/api/embed/v3/" + websiteId.get() + opt.endpoint

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

        const isPostAndNotFormData = opt.method === 'post' && !(opt.data instanceof FormData)
        if (isPostAndNotFormData) {
            xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        }

        xhr.send(!(opt.data instanceof FormData) ? JSON.stringify(opt.data) : null)

        return xhr
    }

}
