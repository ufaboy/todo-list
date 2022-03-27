import Task from "./Task";
import {ITask} from "../interfaces/task";

export default function TaskList(props) {
    const items = props.tasks as ITask[]
    const listItems = items.map(((task, index) =>
        <li className="task-element" key={index}><Task name={task.name} date={task.date} /></li>
    ))
    return (
        <ul className="task-list">
            {listItems}
        </ul>
    )
}