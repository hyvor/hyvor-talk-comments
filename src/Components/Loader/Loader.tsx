import {h, Fragment} from "preact";

export default function Loader({ size } : { size: 'small' | 'medium' | 'large' }) {

    const sizePx = {
        'small': 6,
        'medium': 10,
        'large': 15
    }[size]

    return <Fragment>
        {
            [1,2,3].map(x => {

                const cls = "loader-circle loader-circle-" + x;

                return <span
                    style={{
                        width: sizePx,
                        height: sizePx
                    }}
                    className={cls}
                    part={cls}
                />
            })
        }
    </Fragment>

}
