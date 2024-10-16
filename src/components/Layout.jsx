import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../style/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Layout = () => {
    useEffect(() => {
        const hoverElement = document.getElementById('exam');
        const popup = document.getElementById('drop');
        hoverElement.addEventListener('mouseenter', () => {
            popup.style.display = 'block';
        });
        document.addEventListener('click', (event) => {
            if (!popup.contains(event.target) && event.target !== hoverElement) {
                popup.style.display = 'none';
            }
        });
        
    }, []);
    return (
        <div>
            <header>
                <div className="info-tab">
                    <div className="logo">
                        <img src="https://allen.in/logo_dark.svg" alt="Allen" />
                    </div>
                    <div className="info-options">
                        <p className="exam" id="exam">Exams</p>
                        <div className="dropdown-menu" id="drop">
                            <Link to="/exam/neet"><p className='exams'>NEET</p></Link>
                            <Link to="/exam/jee"><p className='exams'>JEE</p></Link>
                        </div>
                        <p className="program">Programs</p>
                        <p>Scholarships</p>
                        <p>Test Series</p>
                        <p>Study Materials</p>
                    </div>
                </div>
                <div className="login">
                    <p className='talk'>
                        <FontAwesomeIcon className='icon' icon={faPhoneVolume} />Talk to us
                    </p>
                    <p className='log'>Login</p>
                </div>
            </header>
            <Outlet />
            <footer>
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>About</h3>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>News</p>
                        <p>MyExam EduBlogs</p>
                        <p>Privacy policy</p>
                        <p>Public notice</p>
                        <p>Careers</p>
                    </div>
                    <div className="footer-section">
                        <h3>Help & Support</h3>
                        <p>Refund policy</p>
                        <p>Transfer policy</p>
                        <p>Terms & Conditions</p>
                        <p>Contact us</p>
                    </div>
                    <div className="footer-section">
                        <h3>Popular goals</h3>
                        <p>NEET UG</p>
                        <p>JEE Advanced</p>
                        <p>6th to 10th</p>
                    </div>
                    <div className="footer-section">
                        <h3>Courses</h3>
                        <p>Ultimate Program</p>
                        <p>Distance learning</p>
                        <p>Online Test Series</p>
                    </div>
                    <div className="footer-section">
                        <h3>Centers</h3>
                        <p>Kota</p>
                        <p>Bangalore</p>
                        <p>Indore</p>
                        <p>Delhi</p>
                        <p>More centres</p>
                    </div>
                    <div className="footer-section">
                        <h3>Exam information</h3>
                        <p>JEE Main</p>
                        <p>JEE Advanced</p>
                        <p>NEET UG</p>
                        <p>Class 10</p>
                        <p>Class 12</p>
                        <p>Olympiad Exam</p>
                        <p>NEET Online Test Series</p>
                        <p>JEE Online Test Series</p>
                        <p>JEE Main Online Test Series</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.</p>
                    <div className="social-icons">
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
