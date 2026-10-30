import type { TaskListProps } from '../../types'
import TaskItem from './TaskItem'
export default function TaskList(props:TaskListProps){

    const tasks=props.task
    if(tasks.length===0){
        return(<ul>

        </ul>)
    }
    else{
        return(
    <ul className='border-1 border-black'>
      
       {tasks && <TaskItem {...tasks}/>}
    </ul>
)
    }

}