import {h} from 'preact'
import ReplaceableComponent from "../ReplaceableComponent";
import {LoaderSize} from "./Loader";

export default function LoaderWrap({ padding, size = 'small' } : { padding: number, size?: LoaderSize }) {

    return <div
        className="loader-wrap"
        part="loader-wrap"
        style={{padding}}
    >
        <ReplaceableComponent
            name="loader"
            size={size}
        />
    </div>

}
