import React from 'react';
import img from '../img/header.jpg';

import './Head.css';

export  default  function Head(){


    return(
        <div className='head-container'>
            <img src={img} alt=":("/>
            <span>Cookbook</span>
        </div>
    );
}