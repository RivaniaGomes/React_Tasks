import React from "react";
import Task from '../Task/index';
import "./styles.css"

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} />
            ))}
        </>
    )
};

export default Tasks;