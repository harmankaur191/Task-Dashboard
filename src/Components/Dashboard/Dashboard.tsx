import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from '../TaskList/TaskList'
import type { TaskFormData, Task, TaskListProps } from "../../types";
export default function Dashboard() {
    const [formDisplay, setFormDisplay] = useState(false);
    const [task,setTask]=useState<Task[]>([])
    const handleAddTask = (formData: TaskFormData) => {
        const newTask: Task = {
            id:crypto.randomUUID(),
            title: formData.taskName,
            description: formData.taskDescription,
            status: formData.status,
            priority:formData.priority as 'low'|'medium'|'high',
            dueDate:formData.dueDate
        };
        console.log(newTask)
        setTask((prev)=>[newTask,...prev]);
       
        setFormDisplay(false)

 
    }

    const handleChange=(e)=>{}
    const handleDelete=(taskId:string)=>{}
    const taskListprops:TaskListProps={task:task,onStatusChange:handleChange,onDelete:handleDelete}

    return (
        <div>
            <h1>Dashboard-Manage your tasks</h1>
            <button type="submit" className="bg-blue-900 text-white p-1" onClick={() => setFormDisplay(true)}>Add Task</button>
            {formDisplay && (<TaskForm onAddTask={handleAddTask}/>)}
            <TaskList {...taskListprops}/>
        </div>

    )
}