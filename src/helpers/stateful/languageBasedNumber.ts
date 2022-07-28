import {language} from "../../stores/configStore";

export default function languageBasedNumber(number: number) : string {
    const lang = language.get().code;
    switch (lang) {
        case 'fa':
            const map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;","&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"];
            // @ts-ignore
            return number.toString().replace(/\d/g, function($0) { return map[$0]});
    }
    return String(number);
}