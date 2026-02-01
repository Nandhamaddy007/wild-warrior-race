
import './footer.css';
import { FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
<div>
                    
                <nav className="footer-links">
                    <a href="/about">About</a>
                    <a href="/contact">Upcoming Races</a>
                    <a href="/privacy">Wild Warrior X</a>
                    <a href="/terms">Obstacle Infra</a>
                    <a href="/faq">Terms & Conditions</a>
                    <a href="/privacy">Privacy Policy</a>

                </nav>
</div>
                   
      <div className="footer-block">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>  Mail ID: <a href="mailto:wildwarriorventures@gmail.com">wildwarriorventures@gmail.com</a></span>
      </div>
            <div className="footer-block">
        <FontAwesomeIcon icon={faPhone}/>
        <span>  Contact: <a href="tel:+919840581191">+91-98405 81191</a></span>
      </div>
          <div className="footer-block">
      <p>Follow us on social media:</p>
      <div className="footer-block">
        <a href="https://www.linkedin.com/in/wild-warrior-race-3b8783338/recent-activity/all/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin  />
        </a>
        <a href="https://www.youtube.com/@wildwarriorrace5063" target="_blank" rel="noopener noreferrer">
          <FaYoutube  />
        </a>
        <a href="https://www.instagram.com/wildwarriorrace/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
      <p style={{fontSize:"1.5vw"}}>&copy; 2026 Wild Warrior Race. All rights reserved.</p>
            </div>
        </footer>
    );
}