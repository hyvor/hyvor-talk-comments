import test from 'ava'
import {language} from "../../stores/configStore";
import languageBasedNumber from "./languageBasedNumber";

test('default language works', t => {

    language.set({
        code: 'en-us',
        translations: {},
        is_rtl: false
    })

    t.is(languageBasedNumber(100), '100');

});

test('farsi', t => {

    language.set({
        code: 'fa',
        translations: {},
        is_rtl: false
    })

    t.is(languageBasedNumber(1), '&\#1777;')

});

