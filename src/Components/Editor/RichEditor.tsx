import {Fragment, h} from 'preact'
import {useEffect, useRef, useState} from "preact/compat";
import {schema} from "./prosemirror/schema";
import {Schema, DOMParser, MarkType, NodeType} from "prosemirror-model";
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import getPlugins from "./prosemirror/plugins";
import Icon from "../Icon/Icon";
import {AccentButton} from "../Button/Button";
import t from "../../helpers/stateful/t";
import Emoji from "./Panels/Emoji";
import Gif from "./Panels/Gif";
import Image from "./Panels/Image";
import Link from "./Panels/Link";
import {HBEditorView} from "./prosemirror/types";
import {lift, toggleMark, wrapIn} from "prosemirror-commands";

type PanelType = 'emoji' | 'image' | 'gif' | 'link';

function isMarkActive(state: EditorState, type: MarkType) : boolean {
    let {from, $from, to, empty} = state.selection
    if (empty) return Boolean(type.isInSet(state.storedMarks || $from.marks()))
    else return state.doc.rangeHasMark(from, to, type)
}

function isNodeActive(state: EditorState, type: NodeType) : boolean {
    const $from = state.selection.$from;

    let wrapperDepth;
    let currentDepth = $from.depth;
    while (currentDepth > 0) {
        const currentNodeAtDepth = $from.node(currentDepth);

        /* Previous versions used node.hasMarkup but that */
        /* mandates deep equality on attrs. We just want to */
        /* ensure that everyting in the passed in attrs */
        /* is present in the node at the depth */
        const isType = type.name === currentNodeAtDepth.type.name;

        if (isType) { wrapperDepth = currentDepth; }
        currentDepth -= 1;
    }

    return Boolean(wrapperDepth);
}

export default function RichEditor() {

    const ref = useRef<null | HTMLDivElement>(null)
    const [editor, setEditor] = useState<null | HBEditorView>(null);
    const [panel, setPanel] = useState<null | PanelType>(null);

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

    const panelTypes = ['emoji', 'image', 'gif', 'link'];
    const markTypes = ['bold', 'italic'];


    const markNames = {
        bold: 'strong',
        italic: 'em'
    }

    function handleButtonClick(type: ButtonType) {

        if (!editor)
            return;

        if (panelTypes.indexOf(type) >= 0) {
            setPanel(panel === type ? null : type as PanelType);
        }

        if (markTypes.indexOf(type) >= 0) {
            toggleMark(
                editor.state.schema.marks[markNames[type as keyof typeof markNames]]
            )(editor.state, editor.dispatch);
            editor.focus();
        }

        if (type === 'quote') {
            if (isNodeActive(editor.state, editor.state.schema.nodes.blockquote)) {
                lift(editor.state, editor.dispatch)
            } else {
                wrapIn(editor.state.schema.nodes.blockquote)(editor.state, editor.dispatch)
            }

            editor.focus();
        }

    }

    function isActive(type: ButtonType) : boolean {

        if (!editor)
            return false;

        if (panelTypes.indexOf(type) >= 0) {
            return panel === type;
        }

        if (markTypes.indexOf(type) >= 0) {
            return isMarkActive(editor.state, editor.state.schema.marks[markNames[type as keyof typeof markNames]])
        }

        if (type === 'quote') {
            return isNodeActive(editor.state, editor.state.schema.nodes.blockquote);
        }

        return false;

    }

    return <div class="rich-editor">

        <div class="comment-writer" ref={ref}/>

        {
            editor &&

            <Fragment>

                <div class="comment-buttons">
                    <div class="writer-buttons">
                        {
                            ([
                                "emoji",
                                "image",
                                "gif",
                                "link",
                                "bold",
                                "italic",
                                "code",
                                "quote"
                            ] as ButtonType[]).map(name =>
                                <Button
                                    name={name}
                                    editor={editor}
                                    onClick={handleButtonClick}
                                    isActive={isActive(name)}
                                />
                            )
                        }
                    </div>
                    <div class="publish-button">
                        <AccentButton onClick={handlePublish}>{t('comment_button_text')}</AccentButton>
                    </div>
                </div>


                {
                    panel && <Panel type={panel} onClose={() => setPanel(null)} editor={editor}/>
                }

            </Fragment>

        }

    </div>

}

type ButtonType =  'link' | 'bold' | 'italic' | 'quote' | 'code' | 'image' | 'gif' | 'emoji';

interface ButtonProps {
    name: ButtonType,
    editor: HBEditorView,
    onClick: (name: ButtonType) => void,
    isActive: boolean
}

function Button({ name, editor, onClick, isActive } : ButtonProps) {

    return <button
        class={"comment-button" + (isActive ? " active" : "")}
        onClick={() => onClick(name)}
        aria-label={name}
    >
        <Icon name={name} />
    </button>

}

function Panel({ type, editor, onClose } : { type: PanelType, editor: HBEditorView, onClose: Function }) {

    return <div class="panel">
        { type === 'emoji' && <Emoji /> }
        { type === 'image' && <Image editor={editor} onClose={onClose} /> }
        { type === 'gif' && <Gif editor={editor} onClose={onClose} /> }
        { type === 'link' && <Link /> }
    </div>

}