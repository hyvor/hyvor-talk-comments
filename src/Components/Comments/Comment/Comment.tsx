import {Fragment, h} from 'preact'
import {Comment as CommentType} from "../../../types";
import conf from "../../../helpers/stateful/conf";
import ProfilePicture from "../../User/ProfilePicture";
import Icon from "../../Icon/Icon";
import UserName from "../../User/UserName";
import TimeAgo from "../../Misc/TimeAgo";
import t from "../../../helpers/stateful/t";
import {website} from "../../../stores/configStore";

export default function Comment({ comment } : { comment: CommentType }) {

    return <div class="comment">


        <div class="comment-side">

            {
                conf('is_profile_pictures_on') && <ProfilePicture user={comment.user} />
            }

        </div>

        <div class="comment-main">

            <div className="comment-tags">

                { comment.is_featured && <span class="comment-tag featured">{ t('featured') }</span> }

                {
                    comment.is_loved &&
                    <span class="comment-tag loved"><Icon name="heart" /> {
                        t('loved_by', {
                            '*': website.get().name
                        })
                    }
                    </span>
                }

            </div>

            <div class="comment-meta">
                <span class="comment-user-name"><UserName user={comment.user} /></span>
                <span class="comment-time"><TimeAgo time={comment.created_at} /></span>
            </div>

            <div class="comment-content">
                { comment.content }
            </div>

            <div class="comment-actions">

            </div>

        </div>

    </div>

}