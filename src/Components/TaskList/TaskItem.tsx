import type { TaskItemProps } from "../../types";

export default function TaskItem({ task, onStatusChange, onDelete, onEdit}: TaskItemProps) {
    console.log(task)

    return (
        <li className="border-1 border-gray-700 p-2 rounded-xl flex gap-5 bg-white">
            <section>
                <h3 className="font-semibold text-xl">{task.title}</h3>
                <p>{task.description}</p>
                <p>{task.dueDate}</p>
                <section className="flex flex-row gap-3"><p><span>status:</span>{task.status}</p>
                <p><span>priority:</span>{task.priority}</p></section>
            </section>

            <section className="flex flex-row gap-3">
                <button className="bg-blue-400 p-2 max-h-fit rounded-lg" id="edit" onClick={()=>onEdit(task.id)}>Edit</button>
                <button className="bg-blue-400 p-2 max-h-fit rounded-lg" id="delete" onClick={() => onDelete?.(task.id)}>Delete</button>
            </section>

        </li>)
}


