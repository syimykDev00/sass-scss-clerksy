import React from 'react';
import heroImage from './../../../assets/img/heroImage.png'

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--text">
                        <h1>Running the show has never been so easy.</h1>
                        <p>Ready to put the human back in HR? Clerksy helps you set the stage with an
                            inclusive and compliant workplace.</p>
                    </div>
                    <img src={heroImage} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;