import {h} from 'preact'
import {useStore} from "@nanostores/preact";
import {commentsHasMoreIdsState, commentsIndexedState, commentsListState} from "../../stores/commentsStore";
import Comment from "./Comment/Comment";
import {CommentsListIndex} from "../../types";
import LoadMore from "./LoadMore";

interface CommentsListProps {
    index: CommentsListIndex
}

export default function CommentsList({ index } : CommentsListProps) {

    const ids = useStore(commentsListState)[index] || [];
    const comments = useStore(commentsIndexedState);
    const hasMoreIds = useStore(commentsHasMoreIdsState);

    return <div class={"comments-list" + (index === 'PARENT' ? " parent" : "")}>

        {
            ids.map(id => <Comment comment={comments[id]}/>)
        }

        {
            hasMoreIds.indexOf(index) >= 0 && <LoadMore index={index} />
        }

    </div>

}