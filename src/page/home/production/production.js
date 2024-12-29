import React from 'react';
import productionData from './productionData'

const Production = () => {
    return (
        <section id="production">
            <div className="container">
                <div className="production">
                    <h1>HR Production of the Highest Quality</h1>
                    <div className="production--general">
                        {
                            productionData.map(el => {
                                return (
                                    <div className="production--general__group" key={el.id}>
                                        <img src={el.image} alt="img"/>
                                        <h2>{el.title}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Production;