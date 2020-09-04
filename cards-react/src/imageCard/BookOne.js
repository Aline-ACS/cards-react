import React from 'react';
import '../Style.css';
import imageOne from '../images/one.jpg';

export default function bookone(){
    return(
        <div className="imageBook">
            <img src={imageOne}></img>
       </div>
    );
}