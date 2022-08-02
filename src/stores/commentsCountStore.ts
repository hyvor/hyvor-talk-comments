import {computed} from "nanostores";
import {page, updatePageValue} from "./pageStore";

export const commentsCountState = computed(page, p => p.comments_count);

export function increaseCommentsCount() {
    updatePageValue('comments_count', page.get().comments_count + 1);
}
export function decreaseCommentsCount() {
    updatePageValue('comments_count', page.get().comments_count - 1);
}