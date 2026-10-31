import type { TaskListProps } from '../../types'
import TaskItem from './TaskItem'
export default function TaskList({ task, onStatusChange, onDelete, onEdit}: TaskListProps) {

    return (
        <ul className='border-1 border-black flex flex-col gap-2 p-5 '>
            {task.map((taskItem) => (<TaskItem key={taskItem.id}
                task={taskItem}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
                onEdit={onEdit}
            />))}
        </ul>
    )
}