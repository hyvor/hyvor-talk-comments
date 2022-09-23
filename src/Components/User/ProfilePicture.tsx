import {h} from 'preact';
import { useState } from 'preact/hooks';
import conf from "../../helpers/stateful/conf";
import {User} from "../../types";

interface ProfilePictureProps {
    user: User,
    size?: number,
}

export default function ProfilePicture({ user, size = 32 }: ProfilePictureProps) {
    const style = {
        borderRadius: '50%',
        width: size,
        height:size
    }

    const [customElem, setCustomElem] = useState(false);
    const [srcState, setSrcState] = useState(user.picture_url);

    // fallback
    function handleError() {
        const def = conf('default_avatar');
        if (def && srcState !== def) {
            setSrcState(def);
        } else {
            setCustomElem(true);
        }
    }

    return customElem || !srcState ?
        <span
            class="profile-picture-custom"
            style={style}
        >
            {user.name.substring(0, 1)}
        </span> :
        <img
            src={srcState}
            alt={user.name}
            loading="lazy"
            onError={handleError}
            style={style}
        ></img>
}