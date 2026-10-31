import type { TaskFilterProps, TaskStatus } from "../../types";

export default function TaskFilter({onFilterChange}:TaskFilterProps){
    const handleChange = (e)=>{
        const {id, value} = e.target;
    if(id === 'status'){
        onFilterChange({status:value === 'all'?undefined:(value as TaskStatus)});}
        else if(id === 'priority'){
            onFilterChange({priority:value === 'all'? undefined:(value as 'low'|'medium'|'high')});
        }
    };
    
    return(
        <section>
            <select id="status" onChange={handleChange}>
                <option id = 'all' value="all">All Statuses</option>
                <option  id = 'pending' value="pending">Pending</option>
                <option id = 'in-progress' value="in-progress">In-Progress</option>
                <option id = 'completed' value="completed">Completed</option>
            </select>
            <select id='priority' onChange={handleChange}>
                <option  id = 'all' value="all">All Priority</option>
                <option id = 'high' value="high">High</option>
                <option id = 'medium' value='medium'>Medium</option>
                <option id = 'low' value='low'>Low</option>
            </select>
        </section>
    )
}