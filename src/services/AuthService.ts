import { websiteIdState} from "../stores/configStore";
import { getPageApiEndpointUrl} from "./ApiService";
import {addQueryToUrl} from "../helpers/stateless/query";
import {User, UserPageState} from "../types";
import {userState} from "../stores/userStore";
import {setUserPageState} from "../App";

function openPopup(url: string) {
    window.open(url, "_blank", "menubar=no,toolbar=no,location=no,scrollbars=yes,resizable=yes,width=600,height=600");
}

interface PostMessageDataType {

    nonce: number,
    user: User,
    user_page_state: UserPageState,
    token: string,

}

export default class AuthService {

    static getKey() : string {
        return 'ht_' + websiteIdState.get() + '_token';
    }

    static getToken() : string | null {
        return window.localStorage.getItem(this.getKey());
    }

    static saveToken(token: string) {
        window.localStorage.setItem(this.getKey(), token);
    }

    static removeToken() {
        window.localStorage.removeItem(this.getKey());
    }

    static login() {


        /**
         * This random number works as the nonce for the postMessage
         * that is called from the opened login window
         */
        const nonce = Math.ceil(Math.random() * 10e15);

        const url = addQueryToUrl(getPageApiEndpointUrl('/auth'), {
            type: 'hyvor',
            action: 'login',
            nonce: nonce,
            origin: location.origin
        });

        function handleMessage(e: MessageEvent) {

            const data = e.data as PostMessageDataType;

            if (data.nonce !== nonce)
                return;

            window.removeEventListener('message', handleMessage);

            userState.set(data.user);
            setUserPageState(data.user_page_state);

            AuthService.saveToken(data.token);

        }

        window.addEventListener('message', handleMessage);

        openPopup(url);

    }

    static signup() {



    }

}
