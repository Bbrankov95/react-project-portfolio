import { FaBars } from 'react-icons/fa';
import './ToggleButton.css';


const ToggleButton = ({
    onClick
}) => {

    return (<a href="javascript:void(0);" className="toggle-menu" onClick={onClick}>
        <FaBars />
    </a>);
}

export default ToggleButton;