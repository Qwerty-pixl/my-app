import React from 'react'
import picture from '../../img/Pic 1.jpg'
import pic from '../../img/Pic 6.png'
import pictu from '../../img/Pic 3.jpg'
import pi from '../../img/Pic 4.jpg'
import './Info.css'

export default function Info() {
    return (
        <>
            <section className="info">
                <div className="container">
                    <h1 className="info_tit">In The Heart of Hatton Garden</h1>
                    <div className="block">
                        <p className="info_txt">We invite you to visit us at our studio in Hatton Garden, London, and experience the world of Budrevich first-hand. Discover how we can create a bespoke jewel for you or your partner and meet the talented artisans who handcraft every Budrevich creation in our state-of-the-art workshop. </p>
                        <div className="right_info">
                            <img src={picture} alt="" />
                        </div>
                    </div>
                    <div className="block">
                        <div className="pic">
                            <img src={pic} alt=""  className='pic'/>
                        </div>
                        <h1 className="info_tit">All in the Detail</h1>
                    </div>
                    <div className="block">
                        <div className="pictu">
                            <img src={pictu} alt=""/>
                        </div>
                        <p className="info_txt">We invite you to visit us at our studio in Hatton Garden, London, and experience the world of Budrevich first-hand. Discover how we can create a bespoke jewel for you or your partner and meet the talented artisans who handcraft every Budrevich creation in our state-of-the-art workshop. </p>
                    </div>
                    <div className="block">
                        <div className="left_info">
                        <h1 className="info_tit">Passionate About Our Craft</h1>
                        <p className="info_txt">From the moment you arrive for your first appointment to the completion of a jewel, our bespoke service is designed to put you at ease and welcome you into our world.  During your appointment you will get to speak directly to the artisan who will be creating your bespoke piece and, after your jewel has been made, we share photographs of the craftsmanship process — a unique memento of your experience with us.  </p>
                        </div>
                        <div className="right_info pi">
                            <img src={pi} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
