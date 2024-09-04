import dp from '../../constants/images';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


export const Instructor = () => {
    return (
        <>
            <div className="instructor-profile">
                <img src={dp} alt="Instructor" className="instructor-img" />
                <div className="instructor-details">
                    <h2>Hari</h2>
                    <h4>MERN stack developer</h4>
                    <p>
                        Hari is a seasoned SEO expert with over 10 years of experience
                        in digital marketing. He specializes in helping small businesses
                        improve their online presence through effective SEO strategies.
                    </p>
                    <div className="inst-icon">
                        <span className="icon-inst">
                            <FaFacebook />
                        </span>
                        <span className="icon-inst">
                            <FaTwitter />
                        </span>
                        <span className="icon-inst">
                            <FaLinkedin />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
