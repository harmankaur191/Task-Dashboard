import { useState } from "react";
import type { TaskFormProps } from "../../types";

export default function TaskForm(){
const [formData, setFormData] = useState({
    taskName:'',
    status:'pending',
    priority:'medium',
    dueDate:'',
});
const handleChange=(e)=>{
    const {name, value}=e.target;
    setFormData((prev)=>({
        ...prev,[name]:value,
    }));
};
const handleForm =(e)=>{
    e.preventDefault();
    if(!formData.taskName.trim()) return;
    // props.onAddTask(formData);

    //Resetting form fields
    setFormData({
        taskName:'',
        status:'',
        priority:'',
        dueDate:'',

    })
}
    return(
    <form onSubmit={handleForm} >
        <label>Task Name</label>
        <input type="text" name="taskName" value={formData.taskName} placeholder="Enter task Name" onChange={handleChange} required/>
         <label>Status</label>
        <select id="status" name="status" value={formData.status} onChange={handleChange} required>
            <option value="pending">Pending</option>
            <option value="in-progress">In-Progress</option>
            <option value="completed">Completed</option>
        </select>
         <label>Priority</label>
        <select id="priority" name="priority" value={formData.priority} onChange={handleChange} required>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
         <label>Due Date</label>
        <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required  />
        <button type="submit">Create Task</button>
    </form>
    )
}