import {h} from 'preact'
import {useStore} from "@nanostores/preact";
import {commentsIndexedState, commentsListState} from "../../stores/commentsStore";
import Comment from "./Comment/Comment";
import {CommentsListIndex} from "../../types";

interface CommentsListProps {
    index: CommentsListIndex
}

export default function CommentsList({ index } : CommentsListProps) {

    const ids = useStore(commentsListState)[index] || [];
    const comments = useStore(commentsIndexedState);

    return <div>

        {
            ids.map(id => <Comment comment={comments[id]}/>)
        }

    </div>

}