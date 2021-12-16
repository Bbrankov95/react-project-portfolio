import './Nav.css';
import ToggleButton from './ToggleButton/ToggleButton';
import { useState } from 'react';

const Nav = () => {
    const [burgerState, setBurgerState] = useState(false);

    const onClickHandler = () => {
        setBurgerState(!burgerState);
    }
    return (
        <header id='home'>
            <h1>bran<span>DEV</span></h1>
            <nav>
                <ul className={burgerState? 'burger-links':'nav-links'}>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact-me'>Contact</a>
                </ul>
                <ToggleButton onClick={onClickHandler} />
            </nav>
        </header>
    );
};

export default Nav;