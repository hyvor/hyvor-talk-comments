import {HTMLAttributes} from "preact/compat";

type ButtonSize = 'small' | 'medium' | 'normal';

type AccentButtonProps = HTMLAttributes<HTMLButtonElement> & {
    scale?: ButtonSize
}

export function AccentButton(props: AccentButtonProps) {
    const scale = props.scale || 'normal';
    const cls = `global-button ${scale} button-accent ` + (props.class ? " " + props.class : "");
    return <button
        {...props}
        class={cls}
    >{ props.children }</button>
}