import { FaBars } from 'react-icons/fa';
import classes from './ToggleButton.module.scss';

const ToggleButton = ({
    onClick
}) => {

    return (<a href="javascript:void(0);" className={classes["toggle-menu"]} onClick={onClick}>
        <FaBars />
    </a>);
}

export default ToggleButton;