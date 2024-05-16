import React from 'react'
import './App.css'
import image1 from "./Images/Aloevera.jpg"
import image2 from "./Images/Basil.jpg";
import image3 from "./Images/Rosemary.jpg";
import image4 from "./Images/Lavender.jpg";
import { Link } from 'react-router-dom';

function Recommend() {
  return (
	<>
		<div className='main-container2'>
        	<h2 className='heading2'>Recommended Plants</h2>
			<div className="recommend-container">
				<div className="plant-container2">
					<div className='child'>
						<img className="img2" src={image1} alt="img1" />
					</div>
					<p className="title">Aloevera</p>
					<p className="sci-name">Aloe barbadensis miller</p>
					
					<Link to="/aloevera"><button className='readmore'>Read more</button></Link>
				</div>
			

				{/*----------------------- image 2 ------------------------------*/}

				<div className="plant-container2">
					<div className='child'>
						<img className="img2" src={image2} alt="img2" />
					</div>
					<p className="title">Basil</p>
					<p className="sci-name">Ocimum basilicum</p>
					
					<Link to="/aloevera"><button className='readmore'>Read more</button></Link>
				</div>

					{/* --------------------------Image3----------------------------------- */}

				<div className="plant-container2">
					<div className='child'>
						<img className="img2" src={image3} alt="img" />
					</div>
					<p className="title">Rosemary</p>
					<p className="sci-name">Rosmarinus officinalis</p>
					
					<Link to="/aloevera"><button className='readmore'>Read more</button></Link>
				</div>

					{/* -----------------------image4------------------------------------------- */}

				<div className="plant-container2">
					<div className='child'>
						<img className="img2" src={image4} alt="img" />
					</div>
					<p className="title">Lavender</p>
					<p className="sci-name">Lavandula</p>
					
					<Link to="/aloevera"><button className='readmore'>Read more</button></Link>
				</div>

			</div>

				<div className='viewbutton2'>
					<Link to="/recommendedplants"><button className='view2'>View All</button></Link>
				</div>
	
		</div>
	</>
  )
}

export default Recommend;