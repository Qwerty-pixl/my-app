import React from 'react';
import first from '../../img/Group 84.jpg';
import second from '../../img/Group 85.jpg';
import third from '../../img/Group 86.jpg';
import fourth from '../../img/Group 87.jpg';
import './Card.css';

export default function Card() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="card_wrapper">
                        <h1 className='card_tit'>Why choose us</h1>
                        <div className="cards">
                            <div className="card">
                                <div className="card_img">
                                    <img src={first} alt="" />
                                </div>
                                <div className="cart_txt">DIALOGUE BETWEEN CLIENT AND CRAFTSMAN</div>
                            </div>
                            <div className="card">
                                <div className="card_img">
                                    <img src={second} alt="" />
                                </div>
                                <div className="cart_txt">HANDCRAFTED JEWELS,
                                    MADE IN HOUSE</div>
                            </div>
                            <div className="card">
                                <div className="card_img">
                                    <img src={third} alt="" />
                                </div>
                                <div className="cart_txt">EXCEPTIONAL QUALITY
                                    AND ATTENTION TO DETAIL</div>
                            </div>
                            <div className="card">
                                <div className="card_img">
                                    <img src={fourth} alt="" />
                                </div>
                                <div className="cart_txt">FREE FIVE-YEAR AFTER-
                                    SALES SERVICE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
