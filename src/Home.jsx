import React from 'react';
// import web from '../node_modules/bootstrap-icons/icons/basket3-fill.svg';
import { NavLink } from 'react-router-dom';

import Common from './Common';

const imagge = 'https://source.unsplash.com/collection/190727/1600x900';
const imagge2 = 'https://source.unsplash.com/600x400/?beer';


const tea = <h3 className="bji"> Free Beer</h3>

const Home = (props) => {
  return (
    <>

      <Common name='Home  Page' imagesrc={imagge} liq={tea} visit='/services' btname='Welcome home'
        
      />
      <img src={imagge2} />
      </>
  );
}

export default Home;
