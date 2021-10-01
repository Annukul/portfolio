import React from 'react';

import './home.css';
import frontend from '../../icons/frontend.png';
import backend from '../../icons/backend.png';
import database from '../../icons/database.png';

const content = () => {
    return (
        <div className="content" id="content">
            <div className="content-inside">
                <div className="content-inside-left">
                    <img className="frontend-img" src={frontend} alt="Frontend logo" />
                    <h2 className="frontend-head">Front-end Developer</h2>
                    <p className="frontend-simple">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <p className="frontend-color"><strong>Languages I show:</strong></p>
                    <p className="frontend-simple">HTML, CSS, Bootstrap, ReactJS</p>
                </div>

                <div className="content-inside-center">
                <img className="backend-img" src={backend} alt="Backend logo" />
                    <h2 className="backend-head">Back-end Developer</h2>
                    <p className="backend-simple">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <p className="backend-color"><strong>Languages I speak:</strong></p>
                    <p className="backend-simple">NodeJS, PHP</p>
                </div>

                <div className="content-inside-right">
                <img className="database-img" src={database} style={{'height': '95px', 'width': '100px'}} alt="database logo" />
                    <h2 className="database-head">Databases</h2>
                    <p className="database-simple">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <p className="database-color"><strong>Databases I use:</strong></p>
                    <p className="database-simple">MySQL, MongoDB</p>
                </div>
            </div>
        </div>
    )
}

export default content;
