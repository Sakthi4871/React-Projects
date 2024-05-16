import React from 'react'
import './pages.css'
import image1 from "../Images/seed.jpg"
import image2 from "../Images/potplant.jpeg";
import image3 from "../Images/plantcare.jpg";
import image4 from "../Images/choose.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";



function Gallery() {
  return (
    <>
		<div className='gallery-container'>
			<div className='gallery-image1'>
				<img src={image1} />
			</div>
			<div className='gallery-content1'>
				<h1>Botanical Beauty: Step inside Our Gallery</h1>
			</div>
		</div>
		<h3 className='gallery-heading1'>Plant Care Tips & Guidance</h3>
		<div className='gallery-container2'>
			<div className="gallery-box">
				<img className="gallery-img1" src={image2} alt="img1" />
				<h4 className="gallery-title">Container gardening</h4>
				<p className="gallery-content">Container gardening is a soothing, practical and fun way to build opportunities and relationships with the plant kingdom. Bright and colorful points of interest are easy to create with planned spacing. A handy location near the kitchen can be a...</p>
				<Link to="/aloevera"><button className='readme'>Read me <FaArrowRight /></button></Link>
			</div>
			<div className="gallery-box">
				<img className="gallery-img1" src={image3} alt="img1" />
				<h4 className="gallery-title">Foundation for Plant Care</h4>
				<p className="gallery-content">Once we have committed to our chosen plant spaces and plant selections, it is a gift to acknowledge that we now and maybe again, are local participants in the magic of photosynthesis and its Divine results. Regardless of the geographic...</p>
				<Link to="/aloevera"><button className='readme'>Read me <FaArrowRight /></button></Link>
			</div>
			<div className="gallery-box">
				<img className="gallery-img1" src={image4} alt="img1" />
				<h4 className="gallery-title">Plant Selection</h4>
				<p className="gallery-content">Before beginning a garden project, you may have several ideas in mind for enhancing spaces with plants and it is good to take things one a step at a time. Having seen a certain plant, a particular landscape or...</p>
				<Link to="/aloevera"><button className='readme'>Read me <FaArrowRight /></button></Link>
			</div>
		</div>
    </>
  )
}

export default Gallery