import {h} from 'preact'
import RichEditor from "../Editor/RichEditor";
import Comments from "./Comments";
import EditorWrap from "../Editor/EditorWrap";

export default function CommentsWrap() {

    return <div class="comments-wrap">
        <EditorWrap />
        <Comments />
    </div>

}