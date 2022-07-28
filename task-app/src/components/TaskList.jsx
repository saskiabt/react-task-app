import React from "react";
import Task from "./task";

const TaskList = (props) => {
    const {tasks,deleteTask,completeTask} = props; 

    return (
        <ul className="task-list">
                {tasks.map((task,i) => {
                    return(
                        <Task
                            task={task}
                            i={i}
                            key={i}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />
                    )
                })}
        </ul>
    )
}

export default TaskList; 


