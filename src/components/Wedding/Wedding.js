import React from 'react'
import './Wedding.css'
import WedImg from '../../img/Group 88.jpg'
import Kav from '../../img/“.jpg'
import stars from '../../img/Group 32.jpg'

export default function Wedding() {
    return (
        <section>
            <div className="container">
                <div className="wedding">
                    <div className="wed_right">
                        <div className="wed_img">
                            <img src={Kav} alt="" />
                        </div>
                        <div className="wed_text">
                            <div className="wed_txt">Quite simply, my engagement ring designed by and purchased from Budrevich is my favourite possession, not just due to the sentimental value that has been amplified by his time and care taken to collaborate with my partner to create my dream ring, but also because of the exquisite craftsmanship and quality that can not be rivaled elsewhere. On professional valuation, the gentleman viewing my ring complimented us continuously on the exceptional quality of not only the stone, but the setting also. Being a lover of designer quality I was tempted by a well known fine jewellery brand, but could not be happier with my one of a kind Budrevich of equal quality. I strongly urge anyone to visit here before making a decision on any special jewellery purchaces!</div>
                            <div className="wed_txt sus">Susan Gay nee Hindle</div>
                            <div className="wed_stars">
                                <img src={stars} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="wed_left">
                        <img src={WedImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
