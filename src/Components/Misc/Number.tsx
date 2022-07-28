import {h} from 'preact';
import languageBasedNumber from "../../helpers/stateful/languageBasedNumber";

export default function Number({ number } : {number: number}) {
    const html = languageBasedNumber(number)
    return <span dangerouslySetInnerHTML={{__html: html}} />
}