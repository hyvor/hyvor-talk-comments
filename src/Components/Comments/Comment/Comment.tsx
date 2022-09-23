import {h} from 'preact'
import {Comment as CommentType} from "../../../types";
import conf from "../../../helpers/stateful/conf";
import ProfilePicture from "../../User/ProfilePicture";
import Icon from "../../Icon/Icon";
import UserName from "../../User/UserName";
import TimeAgo from "../../Misc/TimeAgo";
import t from "../../../helpers/stateful/t";
import {website} from "../../../stores/configStore";
import CommentsList from "../CommentsList";
import Collapser, {Expander} from "./Collapser";
import {useState} from "preact/compat";

export default function Comment({ comment } : { comment: CommentType }) {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return <div
        class={
            "comment" +
            (isCollapsed ? " collapsed" : "")
        }
    >

        <div class="comment-inside">

            <div className="comment-side">

                {
                    conf('is_profile_pictures_on') && <ProfilePicture user={comment.user}/>
                }

            </div>

            <div className="comment-main">

                <div className="comment-tags">

                    {comment.is_featured && <span className="comment-tag featured">{t('featured')}</span>}

                    {
                        comment.is_loved &&
                        <span className="comment-tag loved"><Icon name="heart"/> {
                            t('loved_by', {
                                '*': website.get().name
                            })
                        }
                    </span>
                    }

                </div>


                <div className="comment-meta">
                    <span className="comment-user-name"><UserName user={comment.user}/></span>
                    <span className="comment-time"><TimeAgo time={comment.created_at}/></span>
                </div>

                <div className="comment-content">
                    {comment.content}
                </div>

                <div className="comment-actions">

                </div>

                {
                    isCollapsed &&
                    <Expander
                        commentId={comment.id}
                        onExpand={() => setIsCollapsed(false)}
                    />
                }

            </div>

        </div>

        <div class="comment-replies">
            <CommentsList index={comment.id}/>
        </div>

        <Collapser onCollapse={() => setIsCollapsed(true)} />

    </div>

}