import { FaTimes } from 'react-icons/fa';
import classes from './ToDoItem.module.scss';

const ToDoItem = (t, onClick,checkedHandler) => {
    return (
        <li className={t.checked ? classes['check'] : classes['todo-item']} key={t.id} id={t.id}>{t.text}
            <div className={classes["controls"]}>
                <input onChange={checkedHandler} type="checkbox"/>
                <FaTimes onClick={onClick} className={classes["icon"]} />
            </div>
        </li>
    );
}

export default ToDoItem;