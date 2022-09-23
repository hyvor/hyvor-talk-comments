import {useStore} from "@nanostores/preact";
import {commentsSortState} from "../../stores/commentsStore";
import Icon from "../Icon/Icon";
import {useState} from "preact/compat";
import {SortType} from "../../types";
import t from "../../helpers/stateful/t";

interface SorterProps {
    onChange: (type: SortType) => void
}

export default function Sorter({onChange}: SorterProps) {

    const sort = useStore(commentsSortState);

    const [isOpen, setIsOpen] = useState(false);

    function handleClick(type: SortType) {
        setIsOpen(false);
        commentsSortState.set(type);
        onChange(type);
    }

    function SortItem({type}: { type: SortType }) {
        return <button
            onClick={() => handleClick(type)}
            class={sort === type ? "active" : ""}
        >{ t(type) }</button>;
    }

    return <div id="sorter">
        <button
            class="sort-button"
            onClick={() => setIsOpen(!isOpen)}
        >{sort} <Icon name="caret" /></button>


        <div class={"sort-selector" + (isOpen ? " open" : "")}>
            <SortItem type="top"></SortItem>
            <SortItem type="newest"></SortItem>
            <SortItem type="oldest"></SortItem>
        </div>

        {
            isOpen && <div
                class="sort-selector-outside-clicker"
                onClick={() => setIsOpen(false)}
            ></div>
        }

    </div>;

}