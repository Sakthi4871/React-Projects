import React from 'react'
import './App.css'
import outdoorbg from './Images/outdoorbg.mp4'
import imageData from './plantscategory.json'
import { Link } from 'react-router-dom'

function Outdoorplants() {
  return (
    <div>
      <div className="obg-video"> 
			  <video src={outdoorbg} autoPlay muted loop/>
		  </div>
      <div className="indoor-container">
			  {imageData.outdoorimages.map(image=>(
          <div className="indoorinner-container" key={image.id} >
            <div className='child' >
              <img className='image'src={image.url} alt={image.id} />
            </div>
            <p className="title">{image.title}</p>
              <p className="sci-name">{image.scifi}</p>
              <Link to={image.link}><button className='readmore'>Read more</button></Link>
          </div>
			  ))}
		  </div>

   
    </div>
  )
}

export default Outdoorplants