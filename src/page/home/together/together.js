import React from 'react';
import togetherImageOne from './../../../assets/img/togetherImageOne.png'
import togetherImageTwo from './../../../assets/img/togetherImageTwo.svg'
import togetherImageThree from './../../../assets/img/togetherImageThree.svg'
import togetherImageFour from './../../../assets/img/togetherImageFour.svg'
import together from "./together";

const Together = () => {
    return (
        <section id="together">
            <div className="container">
                <div className="together">
                    <div className="together--groupOne">
                        <div className="together--groupOne__text">
                            <h2>How the scenes fit together</h2>
                            <p>Employee Training & Development, Diversity & Inclusion Programs,
                                and Conflict Resolution.</p>
                        </div>
                        <img src={togetherImageOne} alt="img"/>
                    </div>
                    <h1>Consider everyone's best interest</h1>
                    <h6>HR is for everyone. Clerksy can help you.</h6>
                    <div className="together--groupTwo">
                        <div className="together--groupTwo__block">
                            <img src={togetherImageTwo} alt="img"/>
                            <h2>Protect Your Company</h2>
                            <ul>
                                <li>Compliance Audits & Training</li>
                            </ul>
                            <ul>
                                <li>Employee Data Storage</li>
                            </ul>
                            <ul>
                                <li>Policy Drafting</li>
                            </ul>
                        </div>
                        <div className="together--groupTwo__block">
                            <img src={togetherImageThree} alt="img"/>
                            <h3>Set Your Employees Up For Success</h3>
                            <ul>
                                <li>Learning & Development</li>
                            </ul>
                            <ul>
                                <li>Employee Relations</li>
                            </ul>
                            <ul>
                                <li>Benefit Management</li>
                            </ul>
                            <ul>
                                <li>Employee Performance</li>
                            </ul>
                        </div>
                        <div className="together--groupTwo__block">
                            <img src={togetherImageFour} alt="img"/>
                            <h4>Know Your Industry's Legal Landscape</h4>
                            <ul>
                                <li>Work Place Investigations</li>
                            </ul>
                            <ul>
                                <li>Employee Mediations</li>
                            </ul>
                            <ul>
                                <li>Performance Tracking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Together;