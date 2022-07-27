import {components, componentsDefinitionType, htDomain, website, websiteId} from "../stores/configStore";
import ApiService from "../services/ApiService";
import {InitCallResponse, loadingState} from "../types";
import {page} from "../stores/pageStore";
import {useEffect, useState} from "preact/compat";
import LoaderWrap from "./Loader/LoaderWrap";

interface AppProps {

    website: {
        id: number,
    },

    page: {
        identifier: string | null,
        url: string | null,
        title: string | null,
        language: string | null,
        author: string | null
    },

    sso: null | {
        user: string,
        hash: string,
        login: string | null,
        signup: string | null
    },

    colorMode: string | null,

    translations: object | null,
    components: componentsDefinitionType

    // other
    htDomain: string | null,

}

export default function App(props: AppProps) {

    websiteId.set(props.website.id)
    htDomain.set(props.htDomain || 'https://talk.hyvor.com');
    components.set(props.components);

    const [status, setStatus] = useState<loadingState>('loading');

    useEffect(() => {

        ApiService.call<InitCallResponse>({
            method: "post",
            endpoint: "/init",
            data: {
                page: props.page,
                sso: props.sso,
            },
            success: (data) => {
                // setStatus('success');

                website.set(data.website)
                page.set(data.page)
            },
            error: () => {
                setStatus('error');
            }
        })

    }, []);

    let body;
    if (status === 'loading') {
        body = <LoaderWrap padding={100} />
    } else if (status === 'error') {
        body = 'Error';
    } else {
        body = 'HEHE';
    }

    return <div id="app" part="app">
        { body }
    </div>
}

function getTopWidget() {



}
