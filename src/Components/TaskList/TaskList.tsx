import type { TaskListProps } from '../../types'
import TaskItem from './TaskItem'
export default function TaskList({ task, onStatusChange, onDelete, onEdit}: TaskListProps) {

    return (
        <ul className='border-1 border-black flex flex-col gap-2 p-2 bg-blue-900 '>
            <h2 className='text-white font-semibold text-xl'>
                YOUR TASKS
            </h2>
            {task.map((taskItem) => (<TaskItem key={taskItem.id}
                
                task={taskItem}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
                onEdit={onEdit}
            />))}
        </ul>
    )
}