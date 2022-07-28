import { atom } from 'nanostores'
import {ComponentType, FunctionalComponent} from "preact";
import {DefaultComponents} from "../Components/ReplaceableComponent";
import {Language, TranslationsKeys, Website} from "../types";

export const htDomain = atom<null | string>(null)
export const website = atom<Website>({} as Website)

export type componentsDefinitionType = Partial<Record<keyof typeof DefaultComponents, ComponentType>>
export const components = atom<componentsDefinitionType>({})

export const language = atom<Language>({} as Language);