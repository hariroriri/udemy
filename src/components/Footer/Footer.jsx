import './Footer.scss';
import logo from '../../assets/logo-dark.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section footer__info">
          <div className="footer__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer__contact-info">
            <p className="footer__address">Address: 70-80 Upper St Norwich NR2</p>
            <p className="footer__phone">Call: +01 123 5641 231</p>
            <p className="footer__email">Email: <a href="mailto:info@edublink.co">info@edublink.co</a></p>
          </div>
        </div>

        <div className="footer__section footer__nav">
          <h4>Online Platform</h4>
          <ul>
            <li><a href="/about" className="footer__link">About</a></li>
            <li><a href="/course" className="footer__link">Course</a></li>
            <li><a href="/instructor" className="footer__link">Instructor</a></li>
            <li><a href="/events" className="footer__link">Events</a></li>
            <li><a href="/instructor-details" className="footer__link">Instructor Details</a></li>
            <li><a href="/purchase-guide" className="footer__link">Purchase Guide</a></li>
          </ul>
        </div>

        <div className="footer__section footer__links">
          <h4>Links</h4>
          <ul>
            <li><a href="/contact" className="footer__link">Contact Us</a></li>
            <li><a href="/gallery" className="footer__link">Gallery</a></li>
            <li><a href="/news" className="footer__link">News & Articles</a></li>
            <li><a href="/faqs" className="footer__link">FAQ’s</a></li>
            <li><a href="/coming-soon" className="footer__link">Coming Soon</a></li>
            <li><a href="/sign-in" className="footer__link">Sign In/Registration</a></li>
          </ul>
        </div>

        <div className="footer__section footer__newsletter">
          <p className="footer__newsletter-text">Enter your email address to register to our newsletter subscription:</p>
          <form className="footer__newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="footer__newsletter-input"
              required
            />
            <button type="submit" className="footer__newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
