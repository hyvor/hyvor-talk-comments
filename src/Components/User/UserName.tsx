import {User} from "../../types";
import ProfileOpener from "./ProfileOpener";


export default function UserName({user}: {user: User}) {

    // TODO: Update this to take settings
    return <ProfileOpener user={user}>
        <span class="user-name">{ user.name }</span>
    </ProfileOpener>

}