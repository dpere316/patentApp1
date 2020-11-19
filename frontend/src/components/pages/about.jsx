import React from 'react';

const about = () => {
    return (
        <div className = "container">
        <div className='mt-5'>
        <h1>How to use application</h1>
            <p>
                Annotator should select whether the patent being viewed is an AI or Machine Learning Patent
            </p>
        </div>
        <div>
            <h2>Technologies Used</h2>
            <h5>Front End </h5>
            <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            </ul>
            <h5>Backend </h5>
            <ul>
                <li>Python</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
        </div>
        </div>
    );
};

export default about;