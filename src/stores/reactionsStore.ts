import {atom, computed} from "nanostores";
import {ReactionType} from "../types";
import {page, updatePageValue} from "./pageStore";
import ApiService from "../services/ApiService";

export const reactions = computed(page, p => p.reactions);
export const userReactionState = atom<ReactionType | null>(null);

export const handleReactionClick = (type: ReactionType) => {

    const oldType = userReactionState.get();

    userReactionState.set(oldType === type ? null : type);

    const change = {} as Record<ReactionType, number>;

    if (oldType) {
        change[oldType] = -1;
    }

    if (type !== oldType) {
        change[type] = +1;
    }

    changeReactionCounts(change);

    ApiService.callPageApi({
        method: 'post',
        endpoint: '/react',
        data: {
            type
        }
    })

}


function changeReactionCounts(obj: Record<ReactionType, number>) {
    const reactionCopy = reactions.get();
    for (const [key, value] of Object.entries(obj)) {
        reactionCopy[key as ReactionType] += value
    }
    updatePageValue('reactions', reactionCopy);
}