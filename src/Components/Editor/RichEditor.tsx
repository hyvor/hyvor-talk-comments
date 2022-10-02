import {h} from 'preact'
import {useEffect, useRef, useState} from "preact/compat";
import {schema} from "./prosemirror/schema";
import {Schema, DOMParser} from "prosemirror-model";
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import getPlugins from "./prosemirror/plugins";
import Icon from "../Icon/Icon";
import {AccentButton} from "../Button/Button";
import t from "../../helpers/stateful/t";

export default function RichEditor() {

    const ref = useRef<null | HTMLDivElement>(null)
    const [editor, setEditor] = useState<null | EditorView>(null);

    const [comment, setComment] = useState('');

    useEffect(() => {

        if (editor)
            return;

        const mySchema = new Schema({
            nodes: schema.spec.nodes,
            marks: schema.spec.marks
        })

        const view = new EditorView(ref.current as HTMLDivElement, {
            state: EditorState.create({
                doc: DOMParser.fromSchema(mySchema).parse(ref.current as HTMLDivElement),
                plugins: getPlugins(mySchema)
            }),
            dispatchTransaction: (tr) => {
                setComment(JSON.stringify(tr.doc.toJSON()))
                const state = view.state.apply(tr)
                view.updateState(state)
            }
        })

        setEditor(view);

    }, [])

    function handlePublish() {

        console.log(comment)

    }

    return <div class="rich-editor">

        <div class="comment-writer" ref={ref}/>

        {
            editor &&
            <div class="comment-buttons">
                <div class="writer-buttons">
                    <Button name="emoji" editor={editor}></Button>
                    <Button name="image" editor={editor}></Button>
                    <Button name="gif" editor={editor}></Button>
                    <Button name="link" editor={editor}></Button>
                    <Button name="bold" editor={editor}></Button>
                    <Button name="italic" editor={editor}></Button>
                    <Button name="code" editor={editor}></Button>
                    <Button name="quote" editor={editor}></Button>
                </div>
                <div class="publish-button">
                    <AccentButton onClick={handlePublish}>{ t('comment_button_text') }</AccentButton>
                </div>
            </div>
        }

    </div>

}

type ButtonType =  'link' | 'bold' | 'italic' | 'quote' | 'code' | 'image' | 'gif' | 'emoji';

interface ButtonProps {
    name: ButtonType,
    editor: EditorView
}

function Button({ name, editor } : ButtonProps) {

    return <button class="comment-button">
        <Icon name={name} />
    </button>

}