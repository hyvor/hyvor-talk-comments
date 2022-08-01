import {action, atom, computed} from "nanostores";
import {Page, ReactionType} from "../types";

export const page = atom<Page>({} as Page)

export function updatePageValue<T extends keyof Page>(key: T, newValue: Page[T]) {
    const p = page.get()
    page.set({
        ...p,
        [key]: newValue
    });
}