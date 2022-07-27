import {h, ComponentProps, ComponentType} from "preact";
import {components} from "../stores/configStore";
import Reactions from "./Reactions/Reactions";
import Loader from "./Loader/Loader";

export const DefaultComponents = {
    loader: Loader,
    reactions: Reactions
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
