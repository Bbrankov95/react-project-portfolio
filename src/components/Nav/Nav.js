import ToggleButton from './ToggleButton/ToggleButton';
import { useState } from 'react';
import classes from './Nav.module.scss';

const Nav = () => {
    const [burgerState, setBurgerState] = useState(false);

    const onClickHandler = () => {
        setBurgerState(!burgerState);
    }
    return (
        <header id='home'>
            <h1>bran<span>DEV</span></h1>
            <nav>
                <ul className={burgerState? classes['burger-links']:classes['nav-links']}>
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