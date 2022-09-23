import {useStore} from "@nanostores/preact";
import {commentsSortState} from "../../stores/commentsStore";
import Icon from "../Icon/Icon";

export default function Sorter() {

    const sort = useStore(commentsSortState);

    return <div id="sorter">
        <span>Sort by {sort} <Icon name="caret" /></span>
    </div>;

}