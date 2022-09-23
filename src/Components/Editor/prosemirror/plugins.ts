import {Schema} from "prosemirror-model";
import {buildInputRules, buildKeymap} from "prosemirror-example-setup";
import {keymap} from "prosemirror-keymap";
import {baseKeymap} from "prosemirror-commands";
import {history} from "prosemirror-history";

export default function getPlugins(schema: Schema) {

    return [
        buildInputRules(schema),
        keymap(buildKeymap(schema)),
        keymap(baseKeymap),
        history(),
    ]

}