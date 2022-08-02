import CommentsCount from "./CommentsCount";

export default function CommentsHeader() {

    // return null;
    return (
        /*<div className="cb-header background-box-outline rounded-box">*/
        <div className="comments-header-wrap">
            <div className="comments-header">
                <div className="comments-header-left">
                    <CommentsCount />
                    {
                        // getConfigWebsiteSettings('is_realtime_online_count_on') ?
                        //     <OnlineCount /> : null
                    }
                </div>
                <div className="comments-header-right">
                    {/*<Sort />*/}
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