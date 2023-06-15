import React from 'react';
import './contact.css';

function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">
                Get in touch
            </h2>
            <span className="section__subtitle">
                Contact me
            </span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">nicoabdala722@icloud.com</span>
                            <a href="mailto:nicoabdala722@icloud.com" className="contact__button"> Write me {" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+5491134066644</span>
                            <a href="https://api.whatsapp.com/send?phone=5491134066644&text=Hi%20Nico!%20Do%20you%20want%20some%20coffee%20and%20churros?" className="contact__button"> Write me {" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Write me your idea</h3>
                    <form className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">
                                Name
                            </label>
                            <input 
                            type="text" 
                            name="name" 
                            className='contact__form-input' 
                            placeholder='Insert your name' />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">
                                Mail
                            </label>
                            <input 
                            type="email" 
                            name="email" 
                            className='contact__form-input' 
                            placeholder='Insert your email' />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">
                                Message
                            </label>
                            <textarea 
                            name="message" 
                            cols="30" 
                            rows="10" 
                            className='contact__form-input' 
                            placeholder='Write your message'>
                            </textarea>
                        </div>
                        <button className="button button--flex">
                            Say Hi! 
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
