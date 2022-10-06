import CommentsCount from "../CommentsCount/CommentsCount";
import t from "../../helpers/stateful/t";
import {useStore} from "@nanostores/preact";
import {userState} from "../../stores/userStore";
import AuthService from "../../services/AuthService";

export default function MainBoxHeader() {

    const user = useStore(userState);

    return (
        <div className="main-box-header-wrap">
            <div className="main-box-header">
                <div className="main-box-header-left">
                    <CommentsCount />
                    {
                        // getConfigWebsiteSettings('is_realtime_online_count_on') ?
                        //     <OnlineCount /> : null
                    }
                </div>
                <div className="main-box-header-right">

                    {
                        !user && <LoginSignup />
                    }

                </div>
            </div>
            {
                // note ?
                //     <div className="cbh-note border-box-outline-light">
                //         <CommentContent html={note} />
                //     </div> : null
            }
        </div>
    );

}

function LoginSignup() {

    return <div class="login-signup">
        <LoginButton type="login" />
        <LoginButton type="signup" />
    </div>

}

function LoginButton({ type } : { type: 'login' | 'signup' } ) {

    return <a
        className={type}
        onClick={AuthService[type]}
    >{t(type)}</a>

}