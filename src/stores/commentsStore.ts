import {atom} from "nanostores";
import {Comment, CommentsListIndex, CommentsListStateType, SortType} from "../types";

/**
 * Comments view in the box
 */
export const commentsViewState = atom<'comments' | 'targeted-comment' | 'search'>("comments");

export const commentsSortState = atom<SortType>();

/**
 * Saves the actual comment objects
 */
export const commentsIndexedState = atom<Record<number, Comment>>({});

/**
 * Saves just the IDs within parent_ids in the correct order
 */
export const commentsListState = atom<CommentsListStateType>();

/**
 * Comment Ids that has more children
 */
export const commentsHasMoreIdsState = atom<CommentsListIndex[]>();


// === API ===



// === Helpers ===

export function updateComment<T extends keyof Comment>(id: number, key: T, value: Comment[T]) {
    const comments = {...commentsIndexedState.get()};
    const comment = comments[id];

    if (!comment)
        return;

    comments[id] = {...comment, [key]: value};

    commentsIndexedState.set(comments);
}

export function getRepliesCount(commentId: number, nested: boolean = false) {

    const commentIds = commentsListState.get()[commentId] || [];
    let count = 0;

    commentIds.forEach(id => {
        count++;

        if (nested) {
            count += getRepliesCount(id, nested);
        }
    })

    return count;
}