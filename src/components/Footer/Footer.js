import './Footer.css';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className='footer-links'>
                <div className='wrapper'>
                    <a href='https://www.facebook.com/'>
                        <div className='button'>
                            <div className='icon'><FaFacebook /></div>
                            <span>Facebook</span>
                        </div>
                    </a>
                </div>
                <div className='wrapper'>
                    <a href='https://www.github.com/Bbrankov95'>
                        <div className='button'>
                            <div className='icon'><FaGithub /></div>
                            <span>GitHub</span>
                        </div>
                    </a>
                </div>
                <div className='wrapper'>
                    <a href='https://www.linkedin.com/'>
                        <div className='button'>
                            <div className='icon'><FaLinkedinIn /></div>
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