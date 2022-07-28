import React from "react";

function Form(props) {
    
    const {label,task,setTask,tasks,setTasks} = props;

    const onChange = (event) => {
        setTask({text:event.target.value});
    };

    const submitForm = (event) => {
        console.log(`task is ${task.text}`); 
        setTasks(tasks.concat(task));
        setTask({text: ''})
        console.log(tasks)
        event.preventDefault()
    }; 

  

    return (
        <div>
            <form onSubmit={submitForm}> Form Component
                <div>
                    <label>{label}</label>
                    <input 
                        type="text" 
                        className="text-input"
                        value={task.text} 
                        onChange={onChange}>
                    </input>
                    <div className="button-box">
                        <button id = "submit" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
     );
}

export default Form;