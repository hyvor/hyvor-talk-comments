import {h} from 'preact'
import {commentsListState} from "../../stores/commentsStore";
import {useStore} from "@nanostores/preact";
import CommentsList from "./CommentsList";
import Sorter from "./Sorter";
import {useState} from "preact/compat";
import {SortType} from "../../types";
import LoaderWrap from "../Loader/LoaderWrap";

export default function Comments() {

    const [isLoading, setIsLoading] = useState(false);

    function handleSortChange(type: SortType) {
        setIsLoading(true);
    }

    return <section id="comments">
        <Sorter onChange={handleSortChange} />

        {
            isLoading ?
                <LoaderWrap padding={100} /> :
                <CommentsList index="PARENT" />
        }
    </section>

}