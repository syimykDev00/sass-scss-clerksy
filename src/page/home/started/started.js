import React from 'react';
import startedImageOne from './../../../assets/img/startedImageOne.png'
import startedImageTwo from './../../../assets/img/startedImageOne.png'

const Started = () => {
    return (
        <section id="started">
            <div className="startedGeneral">
                <img src={startedImageOne} alt="img"/>
                <div className="container">
                    <div className="started">
                        <h1>Get Started With Clerksy</h1>
                        <p>Make sure your business puts people first.</p>
                        <button>Book a Free Discovery Call</button>
                    </div>
                </div>
                <img src={startedImageTwo} alt="img"/>
            </div>
        </section>
    );
};

export default Started;