import {ReactionConfig, ReactionDisplayType, ReactionType} from "../../types";
import Number from "../Misc/Number";
import {htDomain} from "../../stores/configStore";

interface ReactionProps {

    reaction: ReactionConfig,
    hasReacted: boolean, // Whether the user has reacted to the current reaction
    count: number,
    onClick: (type: ReactionType) => void,
    displayType: ReactionDisplayType

}

export default function Reaction({ hasReacted, count, reaction, onClick, displayType } : ReactionProps) {

    const image = reaction.image_url || (`${htDomain.get()}/res/reactions/` + reaction.type + '.svg');

    return <span
            className={
                "reaction" +
                ( hasReacted ? " reacted" : "")
            }
            onClick={() => onClick(reaction.type)}
        >
        <span class="reaction-top">
            {
                (displayType === 'image' || displayType === 'both') &&
                <img src={image} alt={reaction.text || reaction.type}/>
            }
            <span className="reaction-number"><Number number={ count } /></span>
        </span>
        {
            (displayType === 'text' || displayType === 'both') &&
            <span className="reaction-text">{reaction.text}</span>
        }
    </span>

}