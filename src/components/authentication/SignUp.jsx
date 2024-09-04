import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.scss'; 
import signupImg from '../../assets/edu-ro.avif';

const SignUp = () => {
    const [formValues, setFormValues] = useState({ name: '', email: '', your_pass: '', re_pass: '' });
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email address is invalid";
        }
        if (!values.your_pass) {
            errors.your_pass = "Password is required";
        } else if (values.your_pass.length < 6) {
            errors.your_pass = "Password must be at least 6 characters long";
        }
        if (!values.re_pass) {
            errors.re_pass = "Please confirm your password";
        } else if (values.re_pass !== values.your_pass) {
            errors.re_pass = "Passwords do not match";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            // Perform the registration action, e.g., send data to an API
            console.log("Form submitted successfully");
            setIsSubmitting(false);
        } else {
            setIsSubmitting(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    };

    return (
        <section className="signup-section">
            <div className="signup-container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="/" className="signup-form-inner" id="register-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-icon"><i className="bx bx-user"></i></label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Your Name" 
                                    value={formValues.name}
                                    onChange={handleInputChange}
                                    className={formErrors.name ? 'input-error' : ''}
                                />
                                {formErrors.name && <span className="error">{formErrors.name}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email" className="form-icon"><i className="bx bx-envelope"></i></label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Your Email" 
                                    value={formValues.email}
                                    onChange={handleInputChange}
                                    className={formErrors.email ? 'input-error' : ''}
                                />
                                {formErrors.email && <span className="error">{formErrors.email}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="bx bx-lock"></i></label>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="your_pass" 
                                    id="your_pass" 
                                    placeholder="Password"
                                    value={formValues.your_pass}
                                    onChange={handleInputChange}
                                    className={formErrors.your_pass ? 'input-error' : ''}
                                />
                                <span className="password-toggle" onClick={togglePasswordVisibility}>
                                    <i className={showPassword ? "bx bx-hide" : "bx bx-show"}></i>
                                </span>
                                {formErrors.your_pass && <span className="error">{formErrors.your_pass}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="re_pass"><i className="bx bx-lock-alt"></i></label>
                                <input 
                                    type={showRepeatPassword ? "text" : "password"} 
                                    name="re_pass" 
                                    id="re_pass" 
                                    placeholder="Repeat your password" 
                                    value={formValues.re_pass}
                                    onChange={handleInputChange}
                                    className={formErrors.re_pass ? 'input-error' : ''}
                                />
                                <span className="password-toggle" onClick={toggleRepeatPasswordVisibility}>
                                    <i className={showRepeatPassword ? "bx bx-hide" : "bx bx-show"}></i>
                                </span>
                                {formErrors.re_pass && <span className="error">{formErrors.re_pass}</span>}
                            </div>
                            
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="agree-term"
                                    id="agree-term"
                                    className="checkbox-term"
                                />
                                <label htmlFor="agree-term" className="checkbox-label">
                                    <span className="custom-checkbox">
                                        <span>I agree to all statements in</span>
                                    </span>
                                    <a href="#" className="terms-link"> Terms of service</a>
                                </label>
                            </div>
                            
                            <div className="form-group form-button">
                                <input 
                                    type="submit" 
                                    name="signup" 
                                    id="signup" 
                                    className="submit-button" 
                                    value="Register" 
                                    disabled={isSubmitting} 
                                />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <img src={signupImg} alt="sign up" />
                        <Link to="/" className="signup-link">I am already a member</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
