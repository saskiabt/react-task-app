import React from "react";
import Task from "./task";

const TaskList = (props) => {
    const {tasks,deleteTask} = props; 

    return (
        <ul className="task-list">
                {tasks.map((task,i) => {
                    return(
                        <Task
                            task={task}
                            i={i}
                            key={i}
                            deleteTask={deleteTask}
                        />
                    )
                })}
        </ul>
    )
}

export default TaskList; 


