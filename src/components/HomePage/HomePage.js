import { useEffect } from "react";
import "./HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaJs, FaReact, FaHtml5, FaCss3, FaAngleDoubleUp } from 'react-icons/fa';

const HomePage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <section id="home" className="yellow">
                <div className="home-wrapper">
                    <h3>Hello there, im</h3>
                    <h1>Branimir <br />Brankov</h1>
                    <h5>Front-End Web Developer</h5>
                </div>
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <div className="go-home">
                <a href="#home"><FaAngleDoubleUp /></a>
            </div>
            <section id="about" className="yellow">
                <h1>Who am i ?</h1>
                <div className="about-wrapper">
                    <div data-aos="fade-up" className="about-content">
                        <div className="about-info">
                            <p>Hello Its Me, 26year old dev, from Bulgaria.Im fresh Developer ready to dive in the deep depths of JavaScript. Im currently looking for collaboration, job, mentorship or internship to sharpen my skills.</p>
                            <br />
                            <div>
                                <h2>Tech-Stack:</h2>
                                <br />
                                <ul className="technologies">
                                    <li><FaJs /></li>
                                    <li><FaReact /></li>
                                    <li><FaHtml5 /></li>
                                    <li><FaCss3 /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="about-img">
                            <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="about-profile-pic"></img>
                        </div>
                    </div>
                </div>
                <div className="waveop">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <section id="projects" className="yellow">
                <h1>Projects Page</h1>
                <div data-aos="zoom-in" className="project-container">
                    <img data-aos="zoom-in" data-aos-duration="3000" src="https://wallpaperaccess.com/full/1164874.jpg" alt="project-img"></img>
                    <img data-aos="zoom-in" data-aos-duration="3000" src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""></img>
                    <img data-aos="zoom-in" data-aos-duration="3000" src="https://wallpaperaccess.com/full/1164874.jpg" alt="project-img"></img>
                    <img data-aos="zoom-in" data-aos-duration="3000" src="https://wallpaperaccess.com/full/1164874.jpg" alt="project-img"></img>
                </div>
                <div className="custom-shape-divider-top-1639478883">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <section id="contact-me" className="yellow">
                <h1>Contact Me</h1>
                <div className="contact-wrapper">
                    <div data-aos='fade-right' className="form-wrapper">
                        <form>
                            <label htmlFor="first-name">First Name:</label>
                            <input name="first-name" type="text"></input>
                            <label htmlFor="last-name">Last Name:</label>
                            <input name="last-name" type="text"></input>
                            <label htmlFor="email">Email:</label>
                            <input name="email" type="email"></input>
                            <label htmlFor="message">Message:</label>
                            <textarea rows="5" maxLength='255'></textarea>
                            <button><a href="#">Send Message</a></button>
                        </form>
                    </div>
                    <div data-aos='fade-left' className="contact-me-info">
                        <span><FaMapMarkerAlt />357 SE. Lakewood Ave. Ormond Beach, FL 32174</span>
                        <span><FaPhoneAlt /> +1(123)-456-789</span>
                        <span><FaEnvelope />example@example.com</span>
                        <span><FaGlobe /><a href="#">www.example.com</a></span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;