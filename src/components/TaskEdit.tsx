import {useState} from "react";
import '../assets/style/task.scss'

export default function TaskEdit(props) {
    let [task, setTask] = useState({
        name: '',
        date: '',
        checked: false
    });
    return (
        <form className="task-form">
            <input type="text" value={task.name} onChange={e=>setTask({...task, name: e.target.value})}/>
            <input type="date" value={task.date} onChange={e=>setTask({...task, name: e.target.value})}/>
        </form>
    )
}