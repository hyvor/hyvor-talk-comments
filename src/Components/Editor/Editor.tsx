import {h} from 'preact'
import {useEffect, useRef} from "preact/compat";

export default function Editor() {

    const ref = useRef<null | HTMLDivElement>(null)

    useEffect(() => {



    }, [])

    return <div ref={ref} />

}