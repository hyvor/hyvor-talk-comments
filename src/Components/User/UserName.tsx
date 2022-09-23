import {User} from "../../types";


export default function UserName({user}: {user: User}) {

    // TODO: Update this to take settings
    return <span>{ user.name }</span>;

}