import React from 'react'
import './App.css'
import image1 from "./Images/peacelily.jpg"
import image2 from "./Images/Philodendron Xanadu 'green'.jpg";
import image3 from "./Images/Ruby Starlite Starfish Plant.jpg";
import image4 from "./Images/Sanseveria trifasciata.jpg";
import { Link } from 'react-router-dom';
// import Recommend from './recommend';

function Trending() {
	return (
		<>
			<div className='main-container'>
        	<h2 className='heading1'>Trending Plants</h2>
				<div className="trending-container">
					<div className="plant-container">
						<div className='child'>
							<img className="img1" src={image1} alt="img1" />
						</div>
						<p className="title">Peace Lily</p>
						<p className="sci-name">Spathiphyllum wallisii</p>					
						<Link to="/peacelily"><button className='readmore'>Read more</button></Link>
					</div>
			

					{/*----------------------- image 2 ------------------------------*/}

					<div className="plant-container">
						<div className='child'>
							<img className="img1" src={image2} alt="img2" />
						</div>
						<p className="title">Philodendron Xanadu</p>
						<p className="sci-name">Philodendron bipinnatifidum</p>
						<Link to="/aloevera"><button className='readmore'>Read more</button></Link>
					</div>

					{/* --------------------------Image3----------------------------------- */}

					<div className="plant-container">
						<div className='child'>
							<img className="img1" src={image3} alt="img" />
						</div>
						<p className="title">Ruby Starfish</p>
						<p className="sci-name">Echeveria spp.</p>
						<Link to="/aloevera"><button className='readmore'>Read more</button></Link>
					</div>

					{/* -----------------------image4------------------------------------------- */}

					<div className="plant-container">
						<div className='child'>
							<img className="img1" src={image4} alt="img" />
						</div>
						<p className="title">Sanseveria trifasciata</p>
						<p className="sci-name">Spathiphyllum wallisii</p>					
						<Link to="/aloevera"><button className='readmore'>Read more</button></Link>
					</div>

				</div>

				<div className='viewbutton'>
					<Link to="trendingpage"><button className='view'>View All</button></Link>
						
				</div>
	
			</div>
		</>
  	)
}

export default Trending;