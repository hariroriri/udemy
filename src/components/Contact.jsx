import './Contact.scss';
import { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear the error for the respective field if it gets corrected
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email address is invalid";
        }
        if (!formData.subject) formErrors.subject = "Subject is required";
        if (!formData.message) formErrors.message = "Message is required";
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            // Submit the form data to the server or handle it as required
            console.log("Form submitted successfully", formData);
            // Optionally, reset the form or redirect the user
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="contact-head">
                    <div className="contact-description">
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <div className="contact">
                        <div className="contact-content">
                            <h1>We're Always Eager to <br />Hear from You!</h1>
                            <p className="con-para-head">Address</p>
                            <p className="con-para">Studio 76d, Riley Ford, North Michael chester, CF99 6QQ</p>
                            <p className="con-para-head">Email</p>
                            <p className="con-para">hariharan.hh440@gmail.com</p>
                            <p className="con-para-head">Phone</p>
                            <p className="con-para">(+091) 413 554 8598</p>

                            {/* Social Media Icons */}
                        <div className="social-media">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        </div>

                    <div className="contact-card">
                        <p className='get-in-touch'>Get In Touch</p>
                        <p className='get-in-des'>Fill out this form for booking a consultant advising session.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name*"
                                    className="input"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="error">{errors.name}</p>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email*"
                                    className="input"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    className="input"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                {errors.subject && <p className="error">{errors.subject}</p>}
                            </div>
                            <div className="form-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"
                                    className="textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && <p className="error">{errors.message}</p>}
                            </div>
                            <button type="submit" className="button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
