import {atom} from "nanostores";

/**
 * Comments view in the box
 */
export const commentsViewState = atom<'comments' | 'targeted-comment' | 'search'>("comments");