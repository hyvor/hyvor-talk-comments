import {atom} from "nanostores";
import {Comment, CommentsListStateType, SortType} from "../types";

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
export const commentsHasMoreIdsState = atom<number[]>();


// === API ===

