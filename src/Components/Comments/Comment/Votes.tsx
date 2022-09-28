import Icon from "../../Icon/Icon";
import {Comment, VoteType} from "../../../types";
import conf from "../../../helpers/stateful/conf";
import {useStore} from "@nanostores/preact";
import {callVoteApi, changeVoteState, userCommentVoteState} from "../../../stores/votesStore";
import {updateComment} from "../../../stores/commentsStore";


export default function Votes({ comment } : { comment: Comment }) {

    const voting = conf('voting');

    if (voting === 'none')
        return null;

    return <div className="votes">
        <Vote comment={comment} type="up" />
        { voting === 'both' && <Vote comment={comment} type="down" />}
    </div>

}

interface VoteProps {
    comment: Comment,
    type: VoteType
}

function Vote({ comment, type } : VoteProps) {

    const userVotes = useStore(userCommentVoteState);
    const voted = userVotes[comment.id] === type;

    function handleClick() {

        // change current vote
        let change = voted ? -1 : 1;
        const key = type + 'votes' as 'upvotes' | 'downvotes';
        updateComment(comment.id, key, comment[key] + change);

        // reduce other type if it is currently voted
        if (userVotes[comment.id] && !voted) {
            const otherKey = key === 'upvotes' ? 'downvotes' : 'upvotes';
            updateComment(comment.id, otherKey, comment[otherKey] - 1);
        }

        const newVote = voted ? null : type;

        callVoteApi(comment.id, newVote);
        changeVoteState(comment.id, newVote);
    }

    return<span className="vote-wrap">
        <span
            class={"vote" + (voted ? " voted" : "")}
            onClick={handleClick}
        >
            <Icon
                name={
                    "thumbs" +
                    type[0].toUpperCase() + type.slice(1) +
                    (voted ? "Active" : "") as
                    'thumbsUp' | 'thumbsDown' | 'thumbsUpActive' | 'thumbsDownActive'
                }
            />
            <span class="vote-number">{ comment[type + "votes" as 'upvotes' | 'downvotes'] }</span>
        </span>
    </span>

}