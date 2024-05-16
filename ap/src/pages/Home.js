import React from 'react'
import Trending from "../trending";
import bg_video from "../Images/bg_video2.mp4";
import Recommend from '../recommend';
import plantingmoto from "../Images/plantingmoto.mp4";



import "../App.css"

function Home() {
  return (
    <>
		<div className="bg-video"> 
			<video src={bg_video} autoPlay muted loop/>
		</div>
		<Trending />
    	<Recommend />
		<div className='guidance'>
			<div className='video-guide'>
				<video src={plantingmoto} autoPlay muted loop></video>
			</div>
			<div className='video-quote'>
				<p>Nourish plant health: Water wisely,Light tenderly and Listen closely to Nature's needs..</p>
			</div>
		</div>
    </>
  )
}

export default Home