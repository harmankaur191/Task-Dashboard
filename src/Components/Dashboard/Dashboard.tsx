import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from '../TaskList/TaskList'
import type { TaskFormData, Task, TaskListProps } from "../../types";
export default function Dashboard() {
    const [formDisplay, setFormDisplay] = useState(false);
    const [tasks,setTask]=useState<Task[]>([])
    const [editingTask,setEditingTask] = useState<Task|null>(null)
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
    const handleDelete=(taskId:string)=>{
        setTask((prevTasks)=> prevTasks.filter((t)=>t.id !== taskId))
    };
    const handleUpdateTask = (taskId:string,formData:TaskFormData)=>{
        setTask((prevTasks)=>prevTasks.map((t)=>t.id === taskId?{
            ...t,
            title:formData.taskName,
            description:formData.taskDescription,
            status:formData.status,
            priority:formData.priority as 'low'|'medium'|'high',
            dueDate:formData.dueDate,
         }:t ));
         setEditingTask(null);
         setFormDisplay(false)
    }
    const handleEdit=(taskId:string)=>{
        const taskToEdit = tasks.find((t)=>t.id===taskId)
        console.log("Editing task",editingTask)
            setFormDisplay(true)
            setEditingTask(taskToEdit)
    }
    const taskListprops:TaskListProps={task:tasks,onStatusChange:handleChange,onDelete:handleDelete,onEdit:handleEdit}

    return (
        <div className="min-h-screen flex flex-col p-5 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100 text-slate-800 gap-10">
            <h1>Dashboard-Manage your tasks</h1>
            <button type="submit" className="bg-blue-900 text-white p-1 max-w-fit justify-self-end" onClick={() => setFormDisplay(true)}>Add Task</button>
            {formDisplay && (<TaskForm onAddTask={handleAddTask} onUpdateTask={handleUpdateTask} editingTask={editingTask}/>)}
            
            {tasks.length!==0 && <TaskList {...taskListprops}/>}
        </div>

    )
}