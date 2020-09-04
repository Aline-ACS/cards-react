import React from 'react';

import BookOne from '../imageCard/BookOne';
import LegendOne from '../legendCard/LegendOne';

import BookTwo from '../imageCard/BookTwo';
import LegendTwo from '../legendCard/LegendTwo';

import BookThree from '../imageCard/BookThree';
import LegendThree from '../legendCard/LegendThree';

import BookFour from '../imageCard/BookFour';
import LegendFour from '../legendCard/LegendFour';

import BookFive from '../imageCard/BookFive';
import LegendFive from '../legendCard/LegendFive';


export default function table(){
    return(
       <div >
             <section>
                <span><BookOne/> </span>
                <span><LegendOne/></span>
            </section>
            <section>
                <span><BookTwo/></span>
                <span><LegendTwo/></span>
            </section>
            <section>
                <span><BookThree/></span>
                <span><LegendThree/></span>
            </section>
            <section>
                <span><BookFour/></span>
                <span><LegendFour/></span>
            </section>
            <section>
                <span><BookFive/></span>
                <span><LegendFive/></span>
            </section>
       </div>
    );
}