import {ComponentChildren} from "preact";
import {User} from "../../types";
import {useState} from "preact/compat";

interface ProfileOpenerProps {
    user: User,
    children: ComponentChildren
}

export default function ProfileOpener({ children, user }: ProfileOpenerProps) {

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(true);
    }

    return <span
        onClick={handleClick}
        class="profile-opener"
    >
        { children }
        {
            isOpen &&
            <div class="user-profile-popup-wrap">
                <div class="popup-content">
                    <div>{ user.name }</div>
                </div>
            </div>
        }
    </span>

}