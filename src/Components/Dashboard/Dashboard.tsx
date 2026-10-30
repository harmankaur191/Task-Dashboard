import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
export default function Dashboard(){
    const [formDisplay, setFormDisplay] =useState(false);
    // const handleAddTask=()=>{}
    
    return(
        <div>
            <h1>Dashboard-Manage your tasks</h1>
            <button type="submit" className="bg-blue-900 text-white p-1" onClick={()=>setFormDisplay(true)}>Add Task</button>
       {formDisplay&& (<TaskForm />)}
        </div>
        
    )
}