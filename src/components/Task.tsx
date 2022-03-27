import {useState} from "react";
import '../assets/style/task.scss'

export default function Task(props) {
    const id = props.id;
    const name = props.name;
    const date = props.date;
    const checked = props.checked;

    let [task, setTask] = useState({
        id: 0,
        name: '',
        date: '',
        checked: false
    });

    return (
        <div className="task">
            <input type="checkbox" value={checked} />
            <div>{id}</div>
            <div>{date}</div>
            <div>{name}</div>
        </div>
    )

}