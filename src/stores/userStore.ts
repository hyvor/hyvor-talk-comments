import {atom} from "nanostores";
import {User} from "../types";


export const userState = atom<User | null>(null);