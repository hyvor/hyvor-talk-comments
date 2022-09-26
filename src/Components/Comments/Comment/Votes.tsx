import Icon from "../../Icon/Icon";
import {Comment, VoteType} from "../../../types";
import conf from "../../../helpers/stateful/conf";


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

    return<span className="vote-wrap">
        <span class="vote">
            <Icon
                name={"thumbs" + type[0].toUpperCase() + type.slice(1) as 'thumbsUp' | 'thumbsDown'}
            />
            <span class="vote-number">{ comment[type + "votes" as 'upvotes' | 'downvotes'] }</span>
        </span>
    </span>

}