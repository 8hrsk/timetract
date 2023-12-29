import './Header.css';
import TaskNameInput from "./TaskNameInput/TaskNameInput";

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <TaskNameInput />
                </li>
                <li>
                    
                </li>
            </ul>
        </header>
    );
}

export default Header;