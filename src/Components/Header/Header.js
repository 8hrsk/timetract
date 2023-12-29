import './Header.css';
import TaskNameInput from "./TaskNameInput/TaskNameInput";
import Timer from "../Timer/Timer";
import TimerButton from '../TimerButton/TimerButton';

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <TaskNameInput />
                </li>
                <li>
                    <Timer />
                    <TimerButton />
                </li>
            </ul>
        </header>
    );
}

export default Header;