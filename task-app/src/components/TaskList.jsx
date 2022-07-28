import React, {useState} from "react";

const TaskList = (props) => {

    const {tasks} = props
    return (
        <ul className="task-list">
                {tasks.map((item,i) => {
                    return(
                        <div id={i} key={i}>
                            <li>{item.text}</li>
                        </div>
                    )
                })};
        </ul>
    )
}

export default TaskList; 


