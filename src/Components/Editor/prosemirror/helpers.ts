import {HBEditorView} from "./types";
import {NodeSelection} from "prosemirror-state";

export function addImage(editor: HBEditorView, src: string, alt: string) {
    const image = editor.state.schema.nodes.image.create({src, alt});

    const { $from } = editor.state.selection;
    const pos = $from.end() + 1;

    const tr = editor.state.tr.insert(pos, image);
    editor.dispatch(tr);

    const tr2 = editor.state.tr.setSelection(NodeSelection.create(tr.doc, pos)).scrollIntoView()
    editor.dispatch(tr2);

    editor.focus();
}