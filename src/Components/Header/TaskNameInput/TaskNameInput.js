import './TaskNameInput.css';

function TaskNameInput() {
    return (
        <input
            type="text"
            placeholder="Name your task"
            className="task-name-input"
        />
    );
}

export default TaskNameInput;