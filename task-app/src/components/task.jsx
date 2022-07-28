import React from "react";

let completedStyling = {
    div: {
        backgroundColor: "#587b5f",
        color: "white"
    }
}
function Task(props) {
    const {task,i,deleteTask,completeTask} = props; 
    const renderCompletedTaskFormat = () => {
        if (task.isCompleted) {
            return  <div id={i} key={i} className="list-item" style={completedStyling.div}>
                        <li>{task.text}</li>
                        <div className="button-box">
                            <button className="complete-button" onClick={() =>completeTask(i)} style={{display:"none"}}>✓</button>
                            <button className="delete-button" onClick={() =>deleteTask(i)}>🗑️ </button>
                        </div>
                       
                    </div>
        } else return ( 
                    <div id={i} key={i} className="list-item">
                        <li>{task.text}</li>
                        <div className="button-box">
                            <button className="complete-button" onClick={() =>completeTask(i)}>✓</button>
                            <button className="delete-button" onClick={() =>deleteTask(i)}>🗑️ </button>
                        </div>
                    </div>
        );
    };

    return (
        renderCompletedTaskFormat()
    )
}

export default Task;