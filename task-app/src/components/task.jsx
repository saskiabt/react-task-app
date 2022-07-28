import React from "react";

let completedStyling = {
    div: {
        backgroundColor: "rgb(172 219 174)",
        color: "white"
    }
}

function Task(props) {
    const {task,i,deleteTask,completeTask} = props; 
    const conditionalTaskFormatting = () => {
        if (task.isCompleted) {
            return  <div id={i} key={i} className="list-item" style={completedStyling.div}>
                        <li>{task.text}</li>
                        <div className="button-box">
                            <button className="complete" onClick={() =>completeTask(i)} style={{display:"none"}}>✓</button>
                            <button className="delete" onClick={() =>deleteTask(i)}>🗑️ </button>
                            <button className="edit">✎</button>
                        </div>
                       
                    </div>
        } else return ( 
                    <div id={i} key={i} className="list-item">
                        <li>{task.text}</li>
                        <div className="button-box">
                            <button className="complete" onClick={() =>completeTask(i)}>✓</button>
                            <button className="delete" onClick={() =>deleteTask(i)}>🗑️ </button>
                            <button className="edit">✎</button>

                        </div>
                    </div>
        );
    };

    return (
        conditionalTaskFormatting()
    )
}

export default Task;