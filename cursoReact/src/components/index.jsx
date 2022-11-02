import React from "react";
import Task from './Task/index';

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map(task => <Task />)}
        </>
    )
};

export default Tasks;