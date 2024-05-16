import React from 'react'
import Recommend from './recommend'
import './App.css';
import recimage from './Images/recommend-bg.jpg'
import image1 from "./Images/peacelily.jpg"
import image2 from "./Images/Philodendron Xanadu 'green'.jpg";
import image3 from "./Images/Ruby Starlite Starfish Plant.jpg";
import image4 from "./Images/Sanseveria trifasciata.jpg";
import image5 from './Images/Jasmine.jpg';
import image6 from './Images/Money.jpg';
import image7 from'./Images/Lucky Bamboo Plant - 3 Layer.jpg';
import image8 from './Images/Spiderplant.jpg';
import future from './Images/future2.png';
import { Link } from 'react-router-dom';
// import { LiaBrainSolid } from "react-icons/lia";
import imageData from "./plantscategory.json";




function Trendingpage() {
  return (
    <>
        <div className='trendingpage-container'>
            <div className='tre-content2'>
				<div className='main-container01'>
        			<h2 className='heading2'>Trending Plants</h2>
					<div className="trending-container01">
						{imageData.trendingimages.map(image=>(
						<div className="plant-container01" key={image.id}>
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
			</div>
		</div>
		<div className='tre-content1'>
            <img src={future} className='rec-img' ></img>
            <h1 className='quote5'>Hands Holding Life's Promise.</h1>
        </div>
        
    </>
  )
}

export default Trendingpage;