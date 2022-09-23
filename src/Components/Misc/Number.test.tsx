import {h} from 'preact'
import Number from './Number'
import {language} from "../../stores/configStore";
import {render} from '@testing-library/preact'

it('normal Number', () => {

    const { container } = render(<Number number={1000} />)
    expect(container.textContent).toBe('1000')

})

it('farsi Number', () => {

    language.set({
        code: 'fa',
        translations: {},
        is_rtl: false
    })

    const { container } = render(<Number number={19} />)
    expect(container.textContent).toBe('۱۹')

})

it('makes things', () => {
    expect(1).toBe(1);
})
