import {computed} from "nanostores";
import {ReactionType} from "../types";
import {page} from "./pageStore";

export const reactions = computed(page, p => p.reactions);

export const handleReactionClick = (type: ReactionType) => {

    let count = reactions.get()[type];
    count += 10;

    const p = page.get()

    page.set({
        ...p,
        reactions: {
            ...p.reactions,
            [type]: count
        }
    });

}