import React from 'react';
import humanImageOne from './../../../assets/img/humanImageOne.png'
import humanImageTwo from './../../../assets/img/humanImageTwo.png'
import humanLogoOne from './../../../assets/img/humanLogoOne.svg'
import humanLogoTwo from './../../../assets/img/humanLogoTwo.svg'
import humanLogoThree from './../../../assets/img/humanLogoThree.svg'
import humanLogoFour from './../../../assets/img/humanLogoFour.svg'
import humanLogoFive from './../../../assets/img/humanLogoFive.svg'

const Human = () => {
    return (
        <section id="human">
            <div className="container">
                <div className="human">
                    <div className="human--general">
                        <img src={humanImageOne} alt="img"/>
                        <div className="human--general__text">
                            <h2>Put the human back in HR.</h2>
                            <p>Your employees are the real stars.
                                Show the love and help them perform!</p>
                        </div>
                    </div>
                    <div className="human--general">
                        <div className="human--general__text">
                            <h2>You don’t have to play all the parts.</h2>
                            <p>Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.</p>
                        </div>
                        <img src={humanImageTwo} alt="img"/>
                    </div>
                    <h1>We partner with the best</h1>
                    <div className="human--images">
                        <img src={humanLogoOne} alt="img"/>
                        <img src={humanLogoTwo} alt="img"/>
                        <img src={humanLogoThree} alt="img"/>
                        <img src={humanLogoFour} alt="img"/>
                        <img src={humanLogoFive} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Human;