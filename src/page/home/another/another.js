import React from 'react';
import anotherImage from './../../../assets/img/anotherImage.png'

const Another = () => {
    return (
        <section id="another">
            <div className="container">
                <div className="another">
                    <div className="another--group">
                        <h1>Not just another HR resource.</h1>
                        <p>Simple. Entertaining. Informative.</p>
                        <button>Download E-book</button>
                    </div>
                    <img src={anotherImage} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default Another;