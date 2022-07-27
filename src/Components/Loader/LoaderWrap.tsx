import {h} from 'preact'
import ReplaceableComponent from "../ReplaceableComponent";

export default function LoaderWrap({ padding } : { padding: number }) {

    return <div
        className="loader-wrap"
        part="loader-wrap"
        style={{padding}}
    >
        <ReplaceableComponent
            name="loader"
            size="large"
        />
    </div>

}
