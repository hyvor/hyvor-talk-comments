import {h} from 'preact'
import conf from "../../helpers/stateful/conf";
import t from "../../helpers/stateful/t";
import {ReactionConfig} from "../../types";
import Reaction from "./Reaction";

export default function Reactions() {

    const types = ['superb', 'love', 'wow', 'sad', 'laugh', 'angry'];

    return <div
        className="reactions-wrap"
        part="reactions-wrap"
    >
        <div
            className="reactions-title"
            part="reactions-title"
        >{ conf('text_reactions') || t('reactions_text') }</div>

        <div
            class="reactions"
            part="reactions"
        >

            {
                types.map(type => {

                    const reaction = conf('reactions').find(r => r.type === type) as ReactionConfig;

                    return <Reaction
                        hasReacted={false}
                        reaction={reaction}
                        count={0}
                    />

                })
            }

        </div>
    </div>

}
