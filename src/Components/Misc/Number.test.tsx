import {h} from 'preact'
import {render} from '@testing-library/preact'
import Number from './Number'
import test from "ava";
import {language} from "../../stores/configStore";

test('normal Number', t => {

    const { container } = render(<Number number={1000} />)
    t.is(container.textContent, '1000')

})

test('farsi Number', t => {

    language.set({
        code: 'fa',
        translations: {},
        is_rtl: false
    })

    const { container } = render(<Number number={19} />)
    t.is(container.textContent, '۱۹')

})
