import {schema} from "./schema";
import {EditorView} from "prosemirror-view";

export type HBSchema = typeof schema;

export type HBEditorView = EditorView & {
    state: {
        schema: HBSchema
    }
}