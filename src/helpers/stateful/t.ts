import {TranslationsKeys} from "../../types";
import {language} from "../../stores/configStore";

export default function t(key: TranslationsKeys) : string {
    return language.get().translations[key] || '';
}