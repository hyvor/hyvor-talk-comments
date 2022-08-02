import {h} from 'preact'
import {useEffect, useRef} from "preact/compat";
import {schema} from "./prosemirror/schema";
import {Schema, DOMParser} from "prosemirror-model";
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {exampleSetup} from "prosemirror-example-setup"
import getPlugins from "./prosemirror/plugins";

export default function Editor() {

    const ref = useRef<null | HTMLDivElement>(null)

    useEffect(() => {

        const mySchema = new Schema({
            nodes: schema.spec.nodes,
            marks: schema.spec.marks
        })

        new EditorView(ref.current as HTMLDivElement, {
            state: EditorState.create({
                doc: DOMParser.fromSchema(mySchema).parse(ref.current as HTMLDivElement),
                plugins: getPlugins(mySchema)
            })
        })

    }, [])

    return <div ref={ref} />

}