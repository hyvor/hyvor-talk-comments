import {HBEditorView} from "./types";

export function addImage(editor: HBEditorView, src: string, alt: string) {
    const image = editor.state.schema.nodes.image.create({src, alt});

    const { $from } = editor.state.selection;

    const tr = editor.state.tr.insert($from.end() + 1, image);
    editor.dispatch(tr);
}