import {language} from "../../stores/configStore";
import languageBasedNumber from "./languageBasedNumber";

it('works with default language', () => {

    language.set({
        code: 'en-us',
        translations: {},
        is_rtl: false
    })

    expect(languageBasedNumber(100)).toBe('100');

});

it('works with farsi', () => {

    language.set({
        code: 'fa',
        translations: {},
        is_rtl: false
    })

    expect(languageBasedNumber(1)).toBe( '&\#1777;')

});

