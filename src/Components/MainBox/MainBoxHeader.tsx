import CommentsCount from "../CommentsCount/CommentsCount";
import t from "../../helpers/stateful/t";

export default function MainBoxHeader() {

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