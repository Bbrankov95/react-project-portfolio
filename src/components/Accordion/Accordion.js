import { useState } from 'react';
import classes from './Accordion.module.scss';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Accordion = ({
    title,
    content
}) => {
    const [state, setState] = useState(false);

    return (
        <div className={classes["accordion"]}>
            <div className={classes["accordion-header"]}>
                <p>{title}</p>
                <div className={classes['accordion-btn']} onClick={()=>setState(!state)}>{state ? <FaMinus/> : <FaPlus/>}</div>
            </div>
            {state ? <div className={classes['accordion-body']}>{content}</div> : ''}
        </div>
    );
}

export default Accordion;