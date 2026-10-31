import { useEffect, useState } from "react";
import type { TaskFormProps } from "../../types";

export default function TaskForm(props: TaskFormProps) {
    const { onAddTask, onUpdateTask, editingTask } = props
    const [formData, setFormData] = useState({
        taskName: '',
        taskDescription: '',
        status: 'pending',
        priority: 'medium',
        dueDate: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value,
        }));
    };
    useEffect(() => {

        if (editingTask) {
            setFormData({
                taskName: editingTask.title,
                taskDescription: editingTask.description,
                status: editingTask.status,
                priority: editingTask.priority,
                dueDate: editingTask.dueDate,

            })
        } else {
            setFormData({
                taskName: '',
                taskDescription: '',
                status: 'pending',
                priority: 'medium',
                dueDate: '',
            })
        }


    }, [editingTask]);

    const handleForm = (e) => {
        //prevent auto-refreshing of form
        e.preventDefault();
        if (!formData.taskName.trim()) return;
        if(editingTask && onUpdateTask){
             console.log("EditingTask",editingTask)
            onUpdateTask(editingTask.id, formData)
        }else if(onAddTask){
            console.log("AddingTask")
            onAddTask(formData)
        }
        

        //Resetting form fields
        setFormData({
            taskName: '',
            taskDescription: '',
            status: '',
            priority: '',
            dueDate: '',

        })
    }
    return (
        <form onSubmit={handleForm} className="flex flex-col max-w-md p-5 gap-2 border-blue-900 border-2" >
            <label>Task Name</label>
            <input type="text" name="taskName" className ="rounded-lg" value={formData.taskName} placeholder="Enter task Name" onChange={handleChange} required />
            <label>Task Descritpion</label>
            <input type="text" name="taskDescription"  className ="rounded-lg" value={formData.taskDescription} placeholder="Enter task description" onChange={handleChange} required />
            <label>Status</label>
            <select id="status" className ="rounded-lg" name="status" value={formData.status} onChange={handleChange} required>
                <option value="pending">Pending</option>
                <option value="in-progress">In-Progress</option>
                <option value="completed">Completed</option>
            </select>
            <label>Priority</label>
            <select id="priority" className ="rounded-lg" name="priority" value={formData.priority} onChange={handleChange} required>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <label>Due Date</label>
            <input type="date" name="dueDate" value={formData.dueDate} className ="rounded-lg" onChange={handleChange} required />
            <button type="submit" className="rounded-lg bg-gray-900 text-white p-2">{editingTask?'Update Task':'Create Task'}</button>
        </form>
    )
}