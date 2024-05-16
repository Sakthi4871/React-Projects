import React from 'react'
import imageData from './plantsData.json'

function plantList() {
  return (
    <div className='recommendation-container'>
            <div className='rec-content1'>
                <img src={recimage} className='rec-img' ></img>
                <h1 className='quote1'>Grow Wellness:<br/>Plants That Nourish<br/><span className='spot1'>Mind.</span> <span className='spot2'>Body.</span> <span className='spot3'>Soul.</span></h1>
            </div>
            <div className='rec-content2'>
				<div className='main-container02'>
        			<h2 className='heading2'>Recommended Plants</h2>
					<div className="recommend-container02">
						{imageData.images.map(image=>(
							<div className="plant-container02" key={image.id} >
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
  )
}

export default plantList