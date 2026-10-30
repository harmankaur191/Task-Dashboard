import type { TaskItemProps } from "../../types";

export default function TaskItem({task,onStatusChange,onDelete}: TaskItemProps) {
    console.log(task)

    return (
        <li>{task.title}
        </li>)
}


