export default function TaskForm(){
    
    return(
    <form>
        <label>Task Name</label>
        <input type="text" name="taskName" placeholder="Enter task Name"/>
         <label>Status</label>
        <select id="status" >
            <option value="pending">Pending</option>
            <option value="in-progress">In-Progress</option>
            <option value="completed">Completed</option>
        </select>
         <label>Priority</label>
        <select id="priority" >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
         <label>Due Date</label>
        <input type="date" />
        <button type="submit" ></button>
    </form>
    )
}