import React from "react";

function Task(props) {
    const {task,i,deleteTask} = props; 

    return ( 
        <div id={i} key={i} className="list-item">
            <li>{task.text}</li>
            <button className="complete-button">✓</button>
            <button className="delete-button" onClick={() =>deleteTask(i)}>Delete</button>
         </div>
     );
}

export default Task;