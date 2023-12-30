import './Header.css';
import TaskNameInput from "./TaskNameInput/TaskNameInput";
import Timer from "../Timer/Timer";
import TimerButton from '../TimerButton/TimerButton';

function Header() {
    const timerAction = () => {

    }

    return (
        <header>
            <ul>
                <li>
                    <TaskNameInput />
                </li>
                <li>
                    <Timer />
                    <TimerButton onClick={timerAction} />
                </li>
            </ul>
        </header>
    );
}

export default Header;