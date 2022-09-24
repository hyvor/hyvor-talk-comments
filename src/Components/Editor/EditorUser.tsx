import {useStore} from "@nanostores/preact";
import {userState} from "../../stores/userStore";
import ProfilePicture from "../User/ProfilePicture";

export default function EditorUser() {

    const user = useStore(userState)

    return user ? <div class="editor-user">
        <ProfilePicture user={user} />
    </div> : null;

}