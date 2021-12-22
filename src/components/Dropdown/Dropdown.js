import { useEffect, useState } from 'react';
import classnames from './Dropdown.module.scss';
import { FaCaretDown } from 'react-icons/fa';

const options = ['New York', 'Sofia', 'London'];
const defaultState = 'Choose one';

const Dropdown = () => {
    const [state, setState] = useState(false);
    const [option,setOption] = useState(defaultState);

    useEffect(()=>{
        if(state) {
            window.addEventListener('click',onClickHandler)
        }

        return ()=>{
            window.removeEventListener('click',onClickHandler)
        }
    },[state])

    const onClickHandler = (ev) => {
        if (options.find(x=>x === ev.target.textContent)) {
            setOption(ev.target.textContent);
            setState(false);
        } else {
            setOption(defaultState);
            setState(false);
        }
    }
    
    return (
        <div className={classnames["dd-wrapper"]}>
            <div className={classnames["dd-header"]}>
                <button className={classnames['dd-btn']} onClick={() => setState(!state)}>{option}<FaCaretDown/></button>
            </div>
            <div>
                <ul className={state ? classnames['toggled'] : classnames['toggled-off']}>
                    {options.map((o,i)=><li onClick={onClickHandler} className={classnames['dd-item']} key={i}>{o}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;