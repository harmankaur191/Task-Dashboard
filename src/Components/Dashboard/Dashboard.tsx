import { useState } from "react";
export default function Dashboard(){
    const [formDisplay, setFormDisplay] =useState(false);

    return(
        <div>
            <h1>Dashboard-Manage your tasks</h1>
            <button type="submit" >Add Task</button>
        </div>
    )
}