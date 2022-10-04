import {Fragment, h} from 'preact'
import {useEffect, useRef, useState} from "preact/compat";
import {schema} from "./prosemirror/schema";
import {Schema, DOMParser} from "prosemirror-model";
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

type PanelType = 'emoji' | 'image' | 'gif' | 'link';

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

    function handleButtonClick(type: ButtonType) {

        if (
            type === 'emoji' ||
            type === 'image' ||
            type === 'gif' ||
            type === 'link'
        ) {
            setPanel(panel === type ? null : type);
        }



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
                                    isActive={panel === name}
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
        { type === 'image' && <Image /> }
        { type === 'gif' && <Gif editor={editor} onClose={onClose} /> }
        { type === 'link' && <Link /> }
    </div>

}