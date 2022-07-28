import {h} from 'preact'
import conf from "../../helpers/stateful/conf";
import t from "../../helpers/stateful/t";
import {ReactionConfig, ReactionType} from "../../types";
import Reaction from "./Reaction";
import ReplaceableComponent from "../ReplaceableComponent";

export default function Reactions() {

    const types = ['superb', 'love', 'wow', 'sad', 'laugh', 'angry'];

    function handleClick(type: ReactionType) {

    }

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

                    return <ReplaceableComponent
                        name="reaction"
                        hasReacted={false}
                        reaction={reaction}
                        count={0}
                        onClick={handleClick}
                        displayType={conf('reaction_display_type')}
                    />

                })
            }

        </div>
    </div>

}
