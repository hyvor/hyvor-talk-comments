import {h} from 'preact'
import conf from "../../helpers/stateful/conf";
import t from "../../helpers/stateful/t";
import {ReactionConfig, ReactionType} from "../../types";
import ReplaceableComponent from "../ReplaceableComponent";
import {handleReactionClick, reactions, userReactionState} from "../../stores/reactionsStore";
import {useStore} from "@nanostores/preact";

export default function Reactions() {

    const reactionsState = useStore(reactions)
    const userReaction = useStore(userReactionState)

    const types = ['superb', 'love', 'wow', 'sad', 'laugh', 'angry'] as ReactionType[];

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
                        hasReacted={userReaction === type}
                        reaction={reaction}
                        count={reactionsState[type]}
                        onClick={handleReactionClick}
                        displayType={conf('reaction_display_type')}
                    />

                })
            }

        </div>
    </div>

}
