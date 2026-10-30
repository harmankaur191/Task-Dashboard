import type { TaskListProps } from '../../types'
import TaskItem from './TaskItem'
export default function TaskList({task,onStatusChange,onDelete}:TaskListProps){

    
        return(
    <ul className='border-1 border-black'>
      {task.map((taskItem)=>(<TaskItem key={taskItem.id}
    task={taskItem}
    onStatusChange={onStatusChange}
    onDelete={onDelete}
    />))}
    </ul>
)
}