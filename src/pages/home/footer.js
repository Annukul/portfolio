import React from 'react';

import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';


const footer = () => {
    return (
        <footer>
            <div className="email">
                <p>thakran9.anukul@gmail.com</p>
            </div>
            <div className="social_icons">
                <a href="https://github.com/Annukul" target="_blank" rel="noreferrer" ><img src={github} alt="GitHub" /></a>
                <a href="https://www.linkedin.com/in/annukul-thakran-072787167/" target="_blank" rel="noreferrer" ><img src={linkedin} alt="GitHub" /></a>
                <a href="https://twitter.com/thakrananukul" target="_blank" rel="noreferrer" ><img src={twitter} alt="GitHub" /></a>
                <a href="https://www.instagram.com/annukul.js/" target="_blank" rel="noreferrer" ><img src={instagram} alt="GitHub" /></a>
                <p>© Annukul 2021</p>
            </div>
        </footer>
    )
}

export default footer;
