import React from 'react'
import '../style/home.css'
import Button from './Button'
const Home = () => {
    return (
        <div>
            <div className="banner">
                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944051/e8gk63cgiwlqg4dgtxmi.webp?_upload_ref=ic_img_tool" alt="banner" />
            </div>
            <main>
                <div className="info">
                    <div className="tagline">
                        <p>Your Dream. <br/>
                        Our Expertise.</p>
                    </div>
                    <div className="options">
                        <p>What brings you to us today?</p>
                        <div className="buttons">
                            <Button content={"NEET"}/>
                            <Button content={"JEE"}/>
                            <Button content={"Grade 6-10"}/>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310905%2Fc_4_olon7a.webp&w=828&q=75" alt="student" />
                </div>
            </main>
            <section>
                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707734560/download_app_vgvsbx.webp" alt="promo" />
            </section>
        </div>
    )
}

export default Home