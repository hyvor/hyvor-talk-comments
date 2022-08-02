import { h } from 'preact';
import CommentsHeader from "./CommentsHeader";
import {useStore} from "@nanostores/preact";
import {commentsViewState} from "../../stores/commentsStore";
import CommentsBody from "./CommentsBody";

export default function CommentsWrap() {

    const commentsView = useStore(commentsViewState);

    let body;
    if (commentsView === 'comments') {
        body = <CommentsBody />;
    } else if (commentsView === 'targeted-comment') {

    } else {

    }


    return <div className="comments-wrap">
        <CommentsHeader />
        { body }
    </div>

}