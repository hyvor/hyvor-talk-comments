import {TranslationsKeys} from "../../types";
import {language} from "../../stores/configStore";

export default function t(key: TranslationsKeys) {
    return language.get().translations[key];
}