import {ReactionConfig, ReactionType} from "../../types";

interface ReactionProps {

    hasReacted: boolean, // Whether the user has reacted to the current reaction
    count: number,
    reaction: ReactionConfig,
    onClick: (type: ReactionType) => void

}

export default function Reaction({ hasReacted, count, reaction, onClick } : ReactionProps) {

    const image = reaction.image_url || ('https://talk.hyvor.com/res/reactions/' + reaction.type + '.svg');

    return <span
            className={
                "reaction styled-box " +
                ( hasReacted ? " reacted" : "")
            }
            onClick={() => onClick(reaction.type)}
        >
        <img src={image} alt={reaction.text || reaction.type} />
        <Number number={Math.max(props.value, 0)} />
    </span>

}