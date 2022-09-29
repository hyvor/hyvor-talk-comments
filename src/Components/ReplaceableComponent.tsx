import {h, ComponentProps, ComponentType} from "preact";
import {components} from "../stores/configStore";
import Reactions from "./Reactions/Reactions";
import Loader from "./Loader/Loader";
import Reaction from "./Reactions/Reaction";
import {icons} from "./Icon/Icon";

export const DefaultComponents = {
    loader: Loader,
    reactions: Reactions,
    reaction: Reaction,

    'icon.star': icons.star,
    'icon.heart': icons.heart,
    'icon.caret': icons.caret,
    'icon.thumbsUp': icons.thumbsUp,
    'icon.thumbsDown': icons.thumbsDown,
    'icon.thumbsUpActive': icons.thumbsUpActive,
    'icon.thumbsDownActive': icons.thumbsDownActive,
    'icon.link': icons.link,
    'icon.bold': icons.bold,
    'icon.italic': icons.italic,
    'icon.code': icons.code,
    'icon.quote': icons.quote,
    'icon.emoji': icons.emoji,
    'icon.image': icons.image,
    'icon.gif': icons.gif
}

type ReplaceableComponentProps<T extends keyof typeof DefaultComponents> = {
    name: T
} & ComponentProps<typeof DefaultComponents[T]>

export default function ReplaceableComponent<Name extends keyof typeof DefaultComponents>(props: ReplaceableComponentProps<Name>) {

    const { name } = props;
    const CustomComponent: ComponentType | undefined = components.get()[name]
    const DefaultComponent = DefaultComponents[name] as ComponentType

    // removes name
    const filteredProps = Object.keys(props)
        .filter(key => key !== 'name')
        .reduce((obj, key) => {
            // @ts-ignore
            obj[key] = props[key];
            return obj;
        }, {});

    return CustomComponent ? <CustomComponent {...filteredProps} /> : <DefaultComponent {...filteredProps} />
}
