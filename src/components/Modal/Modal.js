import classes from './Modal.module.scss';
import { FaTimes } from 'react-icons/fa';


const Modal = ({
    msg,
    title,
    onClick
}) => {
    return (
        <div className={classes['modal']}>
            <div className={classes['modal-content']}>
                <div className={classes["modal-header"]}>
                    <h4>{title}</h4>
                </div>
                <div className={classes['modal-body']}>
                    <p>{msg}</p>
                </div>
                <FaTimes onClick={onClick} className={classes['modal-ico']}/>
            </div>
        </div>
    );
}

export default Modal;