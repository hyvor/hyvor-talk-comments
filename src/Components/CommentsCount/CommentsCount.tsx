import {h} from 'preact'
import {useStore} from "@nanostores/preact";
import {commentsCountState} from "../../stores/commentsCountStore";
import conf from "../../helpers/stateful/conf";
import t from "../../helpers/stateful/t";
import languageBasedNumber from "../../helpers/stateful/languageBasedNumber";

export default function CommentsCount() {

    const commentsCount = useStore(commentsCountState)
    let str;

    if (commentsCount === 0) {
        str = conf('text_comment_count_0') || t('comments_0');
    } else if (commentsCount === 1) {
        str = conf('text_comment_count_1') || t('comments_1');
    } else {
        const multi = conf('text_comment_count_multi') || t('comments_multi');
        const numberFormatted = languageBasedNumber(commentsCount)
        str = multi.replace('*', numberFormatted);
    }

    return (
        <span className="comments-count" dangerouslySetInnerHTML={{__html: str}} />
    )

}