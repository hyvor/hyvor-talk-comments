import {CommentsListIndex} from "../../types";
import {AccentButton} from "../Button/Button";
import t from "../../helpers/stateful/t";


export default function LoadMore({index}: {index: CommentsListIndex}) {

    return <div class={"load-more" + (index === 'PARENT' ? " parent" : "")}>
        {
            index === 'PARENT' ?
                <AccentButton>{ t('load_more_comments') }</AccentButton> :
                <button>{ t('more_replies') }...</button>
        }
    </div>

}