import { useState } from 'react';
import './signin.scss';
import { Link } from 'react-router-dom';
import signinimg from '../../assets/signin-image.jpg';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="bx bx-user"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="bx bx-lock"></i></label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="your_pass"
                                    id="your_pass"
                                    placeholder="Password"
                                />
                                <span className="password-toggle" onClick={togglePasswordVisibility}>
                                    <i className={showPassword ? "bx bx-hide" : "bx bx-show"}></i>
                                </span>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                                <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                                <li><a href="#"><i className="bx bxl-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="signin-image">
                        <figure><img src={signinimg} alt="sign in" /></figure>
                        <Link to="/signup" className="signup-image-link">Create an account</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;