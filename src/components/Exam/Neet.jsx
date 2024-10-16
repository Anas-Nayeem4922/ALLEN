import React from 'react';
import '../../style/neet.css'
import { Link } from 'react-router-dom';
const Neet = () => {
    return (
        <div>
            <div className="breadcrumb">
                <Link to="/">Home</Link>&nbsp; &gt; &nbsp; 
                <Link to="">NEET</Link>
            </div>

            <div className="content-container">
                <div className="text-section">
                    <h1>NEET Online Coaching</h1>
                    <p>
                        Our NEET Online coaching programs prioritize the NCERT syllabus, a cornerstone for NEET success. 
                        You get access to exclusive study tools and techniques to enhance memory retention and boost your speed, 
                        two crucial factors in acing the NEET exam.
                    </p>
                </div>
                <div className="image-section">
                    <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707308305/neet_0._2x_dkqbnv.webp" alt="Medical graphic illustration" className="main-image" />
                </div>
            </div>

            <div className="cta-banner">
                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727444104/PLP_Ticker_tx7nvz.webp" alt="" />
            </div>

            <div className="neet-banner">
                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727296954/Carousel_j1svii.webp" alt="" />
            </div>
        </div>
    );
}

export default Neet;
