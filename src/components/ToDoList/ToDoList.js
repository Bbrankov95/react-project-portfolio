import { useState } from "react";
import classes from './ToDoList.module.scss';
import generateId from '../../utils/generateId';
import ToDoItem from "./ToDoItem/ToDoItem";


const ToDoList = () => {
    const [todos, setTodos] = useState([
        { text: 'ToDo 1', id: generateId(), checked:false},
        { text: 'ToDo 2', id: generateId(), checked:false},
        { text: 'ToDo 3', id: generateId(), checked:false}
    ]);
    const [value, setValue] = useState('');

    const deleteClickHandler = (e) => {
        if (e.target.tagName === 'path') {
            const value = e.target.parentNode.parentNode.parentNode.id;
            setTodos(todos.filter(t=>t.id !== value));
        } else if (e.target.tagName === 'svg') {
            const value = e.target.parentNode.parentNode.id;
            setTodos(todos.filter(t=>t.id !== value));
        }
    }

    const onClickHandler = () => {
        setTodos(state => [
            ...state,
            { text: value, id: generateId(), checked: false }
        ])
        setValue('')
    }

    const checkedHandler = (ev) => {
        const id = ev.target.parentNode.parentNode.id;
        const newTodos = todos.map(t=> {
            if(t.id === id) {
                t.checked = !t.checked;
            }
            return t;
        });
        setTodos(newTodos);
    }

    return (
        <div className={classes["wrapper"]}>
            <div className={classes["header"]}>
                <input onChange={e => setValue(e.target.value)} name="add-todo" type='text' value={value} placeholder="Add ToDo..."></input>
                <button onClick={onClickHandler}>Add</button>
            </div>
            <div className={classes["todo-body"]}>
                {todos.map(t => ToDoItem(t,deleteClickHandler,checkedHandler))}
            </div>
        </div>
    );
}

export default ToDoList;