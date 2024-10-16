import React from 'react';
import '../../style/neet.css'
import { Link } from 'react-router-dom';
const Jee = () => {
    return (
        <div>
            <div className="breadcrumb">
                <Link to="/">Home</Link>&nbsp; &gt; &nbsp; 
                <Link to="">JEE</Link>
            </div>

            <div className="content-container">
                <div className="text-section">
                    <h1>JEE Online Coaching</h1>
                    <p>
                    Our JEE coaching programs are expertly designed to navigate the complexity of JEE concepts. The program balances its focus on both in-depth understanding and challenging problem-solving, empowering you with confidence to ace the JEE Main and Advanced exams.
                    </p>
                </div>
                <div className="image-section">
                    <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707373455/jee_0_250_nbnt3y.webp" className="main-image" />
                </div>
            </div>

            <div className="cta-banner">
                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1726907235/dark_w_CTA_guaqy5.webp" alt="" />
            </div>

            <div className="neet-banner">
                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727297851/Homepage_Entry_Banner_nvf0yj.webp" alt="" />
            </div>
        </div>
    );
}

export default Jee;
