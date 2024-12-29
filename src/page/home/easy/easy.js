import React from 'react';
import easyArrowOne from './../../../assets/img/easyArrowOne.svg'
import easyArrowTwo from './../../../assets/img/easyArrowTwo.svg'
import easyImage from './../../../assets/img/easyImage.svg'

const Easy = () => {
    return (
        <section id="easy">
            <div className="container">
                <div className="easy">
                    <h1>It's easy as 1, 2, 3</h1>
                    <p>Clerksy can help use your unique business needs. Here's how:</p>
                    <div className="easy--general">
                        <div className="easy--general__text">
                            <h6>Fill out a form and tell us what you're looking for:</h6>
                            <h4>5 minutes</h4>
                        </div>
                        <img src={easyArrowOne} alt="img" className="easy--general__imageOne"/>
                        <div className="easy--general__text">
                            <h6>Time it will take a Clerksy rep to follow up:</h6>
                            <h4>24 hours</h4>
                        </div>
                        <img src={easyArrowTwo} alt="img" className="easy--general__imageOne"/>
                        <img src={easyImage} alt="img" className="easy--general__imageThree"/>
                    </div>
                    <button>Book Free Discovery Call</button>
                </div>
            </div>
        </section>
    );
};

export default Easy;