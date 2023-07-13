import React, {useState} from 'react';
import './qualification.css';

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div>
            <section className="qualy section" id='portfolio'>
                <h2 className="section__title">
                    Qualification
                </h2>
                <span className="section__subtitle">
                    My personal journey
                </span>
                <div className="qualy__container container">
                    <div className="qualy__tabs">
                        <div className= {toggleState === 1 
                            ? "qualy__button qualy__active button--flex" : "qualy__button button--flex"}
                            onClick={() => toggleTab(1)}
                            >
                            <i className="uil uil-graduation-cap qualy__icon"></i> 
                            Education
                        </div>
                        <div className= {toggleState === 2 
                            ? "qualy__button qualy__active button--flex" : "qualy__button button--flex"}
                            onClick={() => toggleTab(2)}
                            >
                            <i className="uil uil-briefcase-alt qualy__icon"></i> 
                            Some of my work experience
                        </div>
                    </div>
                    <div className="qualy__sections">
                        <div className={toggleState === 1
                        ? "qualy__content qualy__content-active" : "qualy__content"}
                        onClick={() => toggleTab(1)}
                        >
                            <div className="qualy__data">
                                <div>
                                    <h3 className="qualy__title">Full Stack Dev</h3>
                                    <span className="qualy__subtitle">Digital House - LATAM</span>
                                    <div className="qualy__calendar">
                                        <i className="uil uil-calendar-alt"></i> Oct 2022 - May 2023
                                    </div>
                                </div>
                                <div>
                                    <span className="qualy__rounder"></span>
                                    <span className="qualy__line"></span>
                                </div>
                            </div>
                            <div className="qualy__data">
                                <div></div>
                                <div>
                                    <span className="qualy__rounder"></span>
                                    <span className="qualy__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualy__title">Web Development</h3>
                                    <span className="qualy__subtitle">Coder House - LATAM</span>
                                    <div className="qualy__calendar">
                                        <i className="uil uil-calendar-alt"></i> May 2021 - Jul 2021
                                    </div>
                                </div>
                            </div>
                            <div className="qualy__data">
                                <div>
                                    <h3 className="qualy__title">Web Development intro</h3>
                                    <span className="qualy__subtitle">Codecademy</span>
                                    <div className="qualy__calendar">
                                        <i className="uil uil-calendar-alt"></i> Jan 2021 - Mar 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualy__rounder"></span>
                                    <span className="qualy__line"></span>
                                </div>
                            </div>
                        </div>
                        <div className={toggleState === 2
                        ? "qualy__content qualy__content-active" : "qualy__content"}
                        onClick={() => toggleTab(2)}
                        >
                            <div className="qualy__data">
                                <div>
                                    <h3 className="qualy__title">Team Project - Digital House</h3>
                                    <span className="qualy__subtitle">Applied Tech: React, Javascript, CSS <br /> 
                                    Express, NodeJS, Sequelize, APIs, MySQL
                                    </span>
                                    <div className="qualy__calendar">
                                        <i className="uil uil-calendar-alt"></i> Jan - Apr 2023
                                    </div>
                                </div>
                                <div>
                                    <span className="qualy__rounder"></span>
                                    <span className="qualy__line"></span>
                                </div>
                            </div>
                            <div className="qualy__data">
                                <div></div>
                                <div>
                                    <span className="qualy__rounder"></span>
                                    <span className="qualy__line"></span>
                                </div>
                                <div>
                                    <a href="https://www.pizzadocatering.com/" target='_blank'>
                                    <h3 className="qualy__title">Shop Online - Pizzado Catering</h3>
                                    </a>
                                    <span className="qualy__subtitle">Applied Tech: ReactJS, Javascript, CSS <br />
                                    NodeJS, APIs.
                                    </span>
                                    <div className="qualy__calendar">
                                        <i className="uil uil-calendar-alt"></i> Oct 2022 - Apr 2023
                                    </div>
                                </div>
                            </div>
                            <div className="qualy__data">
                                <div>
                                    <a href="https://bellezaintegral.vercel.app/" target='_blank'>
                                    <h3 className="qualy__title">Site migration - Belleza Integral</h3>
                                    </a>
                                    <span className="qualy__subtitle">Applied Tech: HTML, SASS, Bootstrap</span>
                                    <div className="qualy__calendar">
                                        <i className="uil uil-calendar-alt"></i> Jul - Ago 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualy__rounder"></span>
                                    <span className="qualy__line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Qualification
