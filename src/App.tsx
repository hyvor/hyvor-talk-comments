import {components, componentsDefinitionType, htDomain, language, website} from "./stores/configStore";
import ApiService from "./services/ApiService";
import {InitCallResponse, loadingState} from "./types";
import {page} from "./stores/pageStore";
import {useEffect, useState} from "preact/compat";
import LoaderWrap from "./Components/Loader/LoaderWrap";
import Reactions from "./Components/Reactions/Reactions";
import { userReactionState} from "./stores/reactionsStore";
import CommentsWrap from "./Components/Comments/CommentsWrap";

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

    htDomain.set(props.htDomain || 'https://talk.hyvor.com');
    components.set(props.components);

    const [status, setStatus] = useState<loadingState>('loading');

    useEffect(() => {

        ApiService.call<InitCallResponse>({
            endpoint: "/init",
            data: {
                page: props.page,
                sso: props.sso,
            },
            success: (data) => {
                setStatus('success');

                website.set(data.website)
                page.set(data.page)
                language.set(data.language)

                if (data.user_page_state) {
                    userReactionState.set(data.user_page_state.reaction);
                }
            },
            error: () => {
                setStatus('error');
            },

            websiteId: props.website.id
        })

    }, []);

    let body;
    if (status === 'loading') {
        body = <LoaderWrap padding={100} />
    } else if (status === 'error') {
        body = 'Error';
    } else {

        body = <div>
            <Reactions />
            <CommentsWrap />
        </div>

    }

    return <div id="app" part="app" style={{
        width: 750,
        margin: "auto"
    }}>
        { body }
    </div>
}

function getTopWidget() {



}
