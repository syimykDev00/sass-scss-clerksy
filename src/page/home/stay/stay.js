import React from 'react';

const Stay = () => {
    return (
        <section id="stay">
            <div className="container">
                <div className="stay">
                    <div className="stay--text">
                        <h1>Stay up to date!</h1>
                        <h6>Sign up for the latest Clerksy news.</h6>
                    </div>
                    <div className="stay--group">
                        <div className="stay--group__inputBtn">
                            <input type="text"/>
                            <button>Sign Up</button>
                        </div>
                        <p>By submitting your email you agree to receive updates about Clerksy.
                            You can unsubscribe at any time. View our full <span>Privacy Policy</span> </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stay;