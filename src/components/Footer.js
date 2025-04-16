import React from 'react';
import '../styles.css';

export default function Footer(){
    const date = new Date().getFullYear();
    return(
        <div className='footer'>
            <p className='footer-text'>
                c {date} All right reserved.
            </p>
         </div>
    );
}
