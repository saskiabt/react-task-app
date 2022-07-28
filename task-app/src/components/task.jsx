import React from "react";

function Task({task}) {
    return ( 
        <div className="task"> Task: {task.name}</div>
    );
}

export default Task;