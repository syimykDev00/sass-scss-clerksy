import React from 'react';
import employessImage from './../../../assets/img/employessImage.png'

const Employess = () => {
    return (
        <section id="employess">
            <div className="container">
                <div className="employess">
                    <h1>Employees come in all shapes and sizes. Find the right fit.</h1>
                    <p>Focus on casting and screening. Let Clerksy handle contracts,
                        resolve any on set-conflicts and
                        make sure you are compliant with work and safety boards.</p>
                    <img src={employessImage} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default Employess;