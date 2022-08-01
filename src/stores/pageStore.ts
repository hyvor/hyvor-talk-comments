import {action, atom, computed} from "nanostores";
import {Page, ReactionType} from "../types";

export const page = atom<Page>({} as Page)