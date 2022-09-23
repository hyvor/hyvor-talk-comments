import {h} from 'preact'
import {commentsListState} from "../../stores/commentsStore";
import {useStore} from "@nanostores/preact";
import CommentsList from "./CommentsList";
import Sorter from "./Sorter";

export default function Comments() {

    return <section id="comments">
        <Sorter />
        <CommentsList index="PARENT" />
    </section>

}