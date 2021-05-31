import React from 'react';
// import web from '../node_modules/bootstrap-icons/icons/basket3-fill.svg';
import { NavLink } from 'react-router-dom';

import Home from './Home';
import Common from './Common';


const imagee = 'https://source.unsplash.com/1600x900/?building';

const About = (props) => {
    return (
        <>
            <Common name='About Page' imagesrc={imagee} liq='10+ outlets' visit='/contact' btname='Contact Now' />

        </>
    );
}

export default About;
