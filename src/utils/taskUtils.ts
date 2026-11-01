import type { Task } from '../types'


export default function sortTask(tasks: Task[], sortByDate?: 'date-asc' | 'date-desc') {
    if (!sortByDate) {
        return tasks;
    } else {
        return [...tasks].sort((a, b) => {
            const dateA = new Date(a.dueDate);
            const dateB = new Date(b.dueDate)
            if (sortByDate === 'date-asc') {
                console.log('date-asc')
                return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
            } else {
                console.log('date-desc')
                return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
            }
        });
    };

}

export function search(tasks: Task[] = [], searchTask: string = ""): Task[] {
    if (!tasks) return [];
    if (!searchTask) {
        console.log('Task not found');
        return tasks;
    }
    const lowerSearchTask = searchTask.toLowerCase();
    return tasks.filter((task) => {
        return task.title.toLowerCase().includes(lowerSearchTask)
    }


    )

}

export function onPageLoad() {
    const savedTasks = localStorage.getItem('tasks');
    const initalTasks = savedTasks ? JSON.parse(savedTasks) : [];
    console.log(initalTasks);
    return initalTasks;
}

export function displayStatistics(tasks) {
    let total = tasks.length;
    let pending = 0;
    let inProgress = 0;
    let completed = 0;
    tasks.forEach((task) => {
        console.log(task.status);
        if (task.status === 'pending') {
            pending++

        } else if (task.status === 'in-progress') {
            inProgress++
        }
        else {
            completed++
        }
    })
    
    let count = {total, completed, pending, inProgress};
    // const completedTasks=(count.completed/total)*100;
    // const pendingTasks=(count.pending/total)*100;
    // const inProgressTasks=(count.inProgress/total)*100;
    // return {total, completedTasks, pendingTasks, inProgressTasks};
    console.log(count)
    return {total, completed, pending, inProgress};
}