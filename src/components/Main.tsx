import {ChangeEvent, useEffect, useState} from "react";
import '../assets/style/main.scss'
import TaskList from "./TaskList";
import TaskEdit from "./TaskEdit";


export default function Main() {
    let [searchValue, setSearchValue] = useState('');
    let [tasks, setTasks] = useState([
        {id:0, name: 'первая задача', date: Date(), checked: true}
    ])
    let [activeTaskIndex, setCurrentTaskIndex] = useState([])
    useEffect(() => {
        // Обновляем заголовок документа, используя API браузера
        document.title = `ToDoList`;
    });

    function updateTasks(value) {
        setTasks(() => tasks.push(value))
    }

    function changeInput(e: ChangeEvent) {
        console.log('updateInputValue', e.target.value)
        const data = e.target.value
        setSearchValue(data)
    }

    function submitInput(value:String) {
        console.log('submitInput', value)
        updateTasks(value)
    }

    return (
        <main className="main">
            <input type="search" value={searchValue}
                   onChange={(e) => changeInput(e)} />
            <TaskList tasks={tasks}/>
            <TaskEdit />
        </main>
    )
}