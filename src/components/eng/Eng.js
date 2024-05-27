import React from 'react'
import DynamicLinkButton from '../DynamicLinkButton'
import '../HeroSection/HeroSection.css'

export default function Eng() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="eng_wrapper">
                        <div className="eng_left">
                            <div className="hero-text eng_text">
                                <h1 className='eng_tit'>Engagement Rings</h1>
                                <p className='hero_txt eng_txt'> Explore our stunning collections of engagement rings. Each is handcrafted to order with exquisite attention to detail in our Hatton Garden studio using only the finest, ethically sourced, GIA certified diamonds.</p>
                                <DynamicLinkButton to="/cart" text="View Collections" />
                            </div>
                        </div>
                        <div className="eng_right">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
