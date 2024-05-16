import React from 'react'
import { useState } from 'react';
import trendingpost from '../Images/trendingposter.png';
import { NavLink } from 'react-router-dom';
import plantdata from '../plantsData.json'
import './pages.css'



function Plants() {
    const [expanded, setExpanded] = useState(false);
    const toggleExpansion = () => {
      setExpanded(!expanded);
    };
  return (
    <>
      <div className='bg_plants'>
        <div className='plant-heading'>
          <h1 >PLANTS</h1>
        </div>
      </div>
      <h1 className='sort-heading'>SORT PLANTS BY CATEGORY</h1>
      {plantdata.plantsortdata.map(image=>(
      <div className='viewpage'>
        <img src={image.url} onMouseEnter={toggleExpansion} onMouseLeave={toggleExpansion}/>
        <NavLink className='viewingbutton' to={image.link}>View Page</NavLink>
        <div className='content12'>
          <h3>{image.title}</h3>
        </div>
      </div>
      ))}
    </>
  )
}
export default Plants





