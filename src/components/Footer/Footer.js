import classes from './Footer.module.scss';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={classes["site-footer"]}>
            <div className={classes['footer-links']}>
                <div className={classes['wrapper']}>
                    <a href='https://www.facebook.com/'>
                        <div className={classes['button']}>
                            <div className={classes['icon']}><FaFacebook /></div>
                            <span>Facebook</span>
                        </div>
                    </a>
                </div>
                <div className={classes['wrapper']}>
                    <a href='https://www.github.com/Bbrankov95'>
                        <div className={classes['button']}>
                            <div className={classes['icon']}><FaGithub /></div>
                            <span>GitHub</span>
                        </div>
                    </a>
                </div>
                <div className={classes['wrapper']}>
                    <a href='https://www.linkedin.com/'>
                        <div className={classes['button']}>
                            <div className={classes['icon']}><FaLinkedinIn /></div>
                            <span>LinkedIn</span>
                        </div>
                    </a>
                </div>
            </div>
            <p>branDEV &copy;</p>
        </footer>
    );
}

export default Footer;