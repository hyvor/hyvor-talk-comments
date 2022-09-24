import {websiteIdState} from "../stores/configStore";

export default class AuthService {

    static getToken() : string | null {
        const key = 'ht_' + websiteIdState.get() + '_token';
        return window.localStorage.getItem(key);
    }

}
