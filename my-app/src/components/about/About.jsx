import React from 'react';
import './about.css';
import AboutImg from '../../assets/img/profile.jpg';
import CV from '../../assets/img/CV-Nico-0623.pdf';
import Info from './Info';


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">
                About Me
            </h2>
            <span className="section__subtitle">
                Introduction
            </span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        Skilled in collaborating effectively within teams, I bring a valuable mix of 
                        independence and teamwork. I am constantly seeking new knowledge and 
                        technologies to enhance my skill set. <br></br>
                        I embrace feedback as an opportunity for growth and continuously strive for 
                        improvement. With adaptable problem-solving abilities, I am eager to contribute 
                        to the success of your organization.</p>
                        <a download='' href={CV} className="button button--flex">
                            Download Resume
                        </a>
                </div>
            </div>
        </section>
    )
}

export default About
