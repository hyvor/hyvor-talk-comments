import { h } from 'preact';
import MainBoxHeader from "./MainBoxHeader";
import {useStore} from "@nanostores/preact";
import {commentsViewState} from "../../stores/commentsStore";
import CommentsWrap from "../Comments/CommentsWrap";

export default function MainBox() {

    const commentsView = useStore(commentsViewState);

    let body;
    if (commentsView === 'comments') {
        body = <CommentsWrap />;
    } else if (commentsView === 'targeted-comment') {

    } else {

    }

    return <div className="main-box">
        <MainBoxHeader />
        { body }
    </div>

}