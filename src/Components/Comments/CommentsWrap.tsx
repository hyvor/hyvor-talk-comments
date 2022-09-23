import {h} from 'preact'
import Editor from "../Editor/Editor";
import Comments from "./Comments";

export default function CommentsWrap() {

    return <div class="comments-wrap">
        <div className=""></div>
        <Editor />
        <Comments />
    </div>

}