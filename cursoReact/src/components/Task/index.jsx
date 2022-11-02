import React from "react";
import "./styles.css"

function Task({ task }) {
    return (
        <div className="task-container">
            {task.title}
        </div>
    );
}

export default Task;