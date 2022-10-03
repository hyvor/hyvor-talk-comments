import {ComponentChildren} from "preact";
import t from "../../helpers/stateful/t";


export default function NoResults({ text } : {text?: string}) {

    text = text || t('no_results');

    return <div class="global-no-results">{ text }</div>

}