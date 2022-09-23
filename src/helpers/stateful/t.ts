import {TranslationsKeys} from "../../types";
import {language} from "../../stores/configStore";

export default function t(key: TranslationsKeys, replace?: Record<string, string>) : string {
    let phrase = language.get().translations[key] || '';

    if (replace) {
        for (const [search, value] of Object.entries(replace)) {
            phrase = phrase.replace(search, value);
        }
    }

    return phrase;
}