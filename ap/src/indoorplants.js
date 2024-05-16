import React from 'react'
import './App.css'
import imageData from "./plantscategory.json";
import { Link } from 'react-router-dom';
import dyk from './Images/dyk.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Indoorplants() {

    useEffect(()=>{
        Aos.init({duration:1000})
      }, [])
    return (
        <div>
            <div className='indoor-bg'>
                <h1 data-aos="fade-right">INDOOR</h1><br/>
                <h2 data-aos="fade-right">PLANTS</h2>
            </div>
            <div className="indoor-container">
                {imageData.indoorimages.map(image=>(
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
            <div className='dyk-container'>
                <img src={dyk}  />
            </div>
            <div class="accordion possible" id="accordionPanelsStayOpenExample">
                <div class="accordion-item  expandbutton">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    HOUSEPLANT FACT 1
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <strong>INDOOR HOUSEPLANTS CLEAN THE AIR</strong> One of the most important houseplant facts is backed up by science. A study by NASA shows that indoor houseplants actually purify the air.The reason behind this is that houseplants tend to be accustomed to growing without direct sunlight. This means that they are effective in processing gasses for photosynthesis. This also means they are able to absorb harmful gasses and improve the quality of air in the room they are in. 
                    </div>
                    </div>
                </div>
                <div class="accordion-item expandbutton">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    HOUSEPLANT FACT 2
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <strong> HOUSEPLANTS REDUCE STRESS</strong> Did you know that people who work in an environment surrounded by plants felt more relaxed and had lower blood pressure? Studies show that having plants is a great boost for comfort and remaining focused. 
                    </div>
                    </div>
                </div>
                <div class="accordion-item expandbutton">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    HOUSEPLANT FACT 3
    
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <strong>HOUSEPLANTS AID RECOVERY</strong> When you visit someone in hospital, what’s the gift you should generally bring? And before you say it, no, it’s not chocolate. Flowers! That’s right, or a houseplant. And it’s not just because they are pretty. Studies show that plants and flowers can actually speed up recovery, be it from injury, surgery or an illness. Alongside that, the patient would typically require less pain medication and shorter hospital stays.
                    </div>
                    </div>
                    
                </div>
                
                
            </div>
            <div class="accordion possible" id="accordionPanelsStayOpenExample">
            <div class="accordion-item expandbutton">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    HOUSEPLANT FACT 4

    
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <strong>HOUSEPLANT AILMENTS CAN SPREAD</strong>We’ve all been there when one of our plants is struggling. Sometimes we prune, repot, move it, and try any number of things to help it. One important thing to remember when this happens is that when using pruners, clippers or trowels, make sure to clean them with rubbing alcohol before you use them on another plant. This will stop any bacteria or bugs from spreading onto another plant. 
                    </div>
                    </div>
                    
                </div>
                <div class="accordion-item expandbutton">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                    HOUSEPLANT FACT 5  

    
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <strong>MUSIC HELPS PLANTS GROW</strong> Did you know that plants love music? We all know that having houseplants can be a relaxing and tranquil experience, but sometimes a little music goes a long way. The old wive's tale of singing to your plants is not a myth. So turn up your favourite records and sing your heart out. Your plants will thank you for it, even if your neighbours won't. 
                    </div>
                    </div>
                    
                </div>
                <div class="accordion-item expandbutton">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                    HOUSEPLANT FACT 6
    
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <strong>HOUSEPLANTS TALK TO EACH OTHER</strong> No, you are not dreaming. This is a FACT. Science now shows that plants actually talk to each other. They generally do this via their roots or even by letting out chemicals into their soil. 
                    </div>
                    </div>
                    
                </div>

            </div>

    </div>
  )
}

export default Indoorplants