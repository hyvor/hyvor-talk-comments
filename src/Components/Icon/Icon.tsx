import {HTMLAttributes} from "preact/compat";
import {components} from "../../stores/configStore";
import ReplaceableComponent from "../ReplaceableComponent";

export const icons = {
    star: () => <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
    >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>,

    heart: () => <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
    >
        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
    </svg>,

    caret: () => <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 105.83 105.83"
    >
        <path
            d="M1.743 29.457a5.82 5.82 0 0 1 8.217-.676l46.446 39.381a5.82 5.82 0 1 1-7.541 8.894L2.42 37.674a5.82 5.82 0 0 1-.676-8.217z"
            paintOrder="stroke fill markers"
        />
        <path
            d="M104.09 29.456a5.82 5.82 0 0 0-8.217-.676L49.428 68.16a5.82 5.82 0 1 0 7.541 8.894l46.445-39.381a5.82 5.82 0 0 0 .676-8.217z"
            paintOrder="stroke fill markers"
        />
    </svg>

}

interface IconProps {
    wrapperProps?: HTMLAttributes<HTMLSpanElement>,
    name: keyof typeof icons
}

export default function Icon({ wrapperProps = {}, name } : IconProps) {

    return <span
        style={{verticalAlign: 'middle'}}
        className={"icon " + name + (wrapperProps.class ? " " + wrapperProps.class : "")}
        {...wrapperProps}
    >
        { /* @ts-ignore */ }
        <ReplaceableComponent name={"icon." + name} />
    </span>;

}