import t from "../../../helpers/stateful/t";
import {getRepliesCount} from "../../../stores/commentsStore";
import Icon from "../../Icon/Icon";
import {AccentButton} from "../../Button/Button";

interface CollapserProps {
    onCollapse: Function
}

export default function Collapser({ onCollapse } : CollapserProps) {
    return <div
        class="collapser"
        onClick={() => onCollapse()}
    ><div class="collapse-bar"></div></div>
}

interface ExpanderProps {
    commentId: number,
    onExpand: Function
}

export function Expander({ commentId, onExpand } : ExpanderProps) {

    const replies = getRepliesCount(commentId, true);
    const txt = replies > 0 ? t('expand_comments', {
        '*': (replies + 1).toString()
    }) : t('expand_comment');

    return <div class="expander">
        <AccentButton
            scale="small"
            onClick={() => onExpand()}
        >{ txt } <Icon name="caret" /></AccentButton>
    </div>

}