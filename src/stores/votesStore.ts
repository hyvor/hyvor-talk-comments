import {atom} from "nanostores";
import {VoteType} from "../types";
import ApiService from "../services/ApiService";

export const userCommentVoteState = atom<Record<number, VoteType>>({});

export const changeVoteState = (commentId: number, type: VoteType | null) => {
    const state = {...userCommentVoteState.get()}
    if (state[commentId] && !type) {
        delete state[commentId];
    } else if (type) {
        state[commentId] = type;
    }
    userCommentVoteState.set(state);
}

// API

export const callVoteApi = (commentId: number, type: VoteType | null) => {

    ApiService.callPageApi({
        method: 'post',
        endpoint: `/comment/${commentId}/vote`,
        data: {
            type
        }
    })

}