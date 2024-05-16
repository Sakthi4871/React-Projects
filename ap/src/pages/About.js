import React from 'react'
import './pages.css'
import image2 from "../Images/vm_about.png";
import image3 from "../Images/Botanist.jpg";
import image4 from "../Images/botanist4.jpg";
import image5 from "../Images/commit.jpg";
import image6 from "../Images/plantlogo4.png";

function About() {
  return (
    <>
      <div className='bg_about'>
        <h1>Welcome to PlantsPedia: Your Botanical Knowledge Hub</h1>    
      </div>
      <div className='about_container1'>
        <div className='about_content1'>
          <h3>Our Mission and Vision</h3>
          <p>At PlantsPedia, we're passionate about plants and committed to providing accurate botanical information and guidance to botanists of all levels. Our platform serves as a comprehensive resource for plant enthusiasts, educators, researchers, and professionals alike.</p>
        </div>
        <div className='about_img1'>
          <img src={image2}/>
        </div>
      </div>
      <div className='about_container2'>
        <div className='about_content1'>
          <h3>Who We Are</h3>
            <p>At PlantsPedia, we are a dedicated team of botanists, educators, researchers, and plant enthusiasts with a shared passion for botanical knowledge. Our diverse backgrounds and expertise enable us to curate and deliver high-quality content and services that cater to the needs of our global audience.</p>
        </div>
        <div className='about_img1'>
          <img src={image3}/>
        </div>
      </div>
      <div className='about_container3'>
        <div className='about_content1'>
          <h3>What We Offer</h3>
            <p><span>Comprehensive Plant Information:</span> Explore our extensive database of plant species, including detailed descriptions, habitat information, and cultivation tips.</p>
            <p><span>Botanist Guidance:</span> Whether you're seeking identification assistance, botanical resources, or expert advice, our platform provides the tools and support you need to thrive in your botanical pursuits.</p>
            <p><span>Community Engagement:</span> Join our vibrant community of plant enthusiasts, participate in citizen science projects, and connect with like-minded individuals who share your passion for plants.</p>
        </div>
        <div className='about_img1'>
          <img src={image4}/>
        </div>
      </div>
      <div className='about_container2'>
        <div className='about_content1'>
          <h3>Our Commitment to Excellence</h3>
          <p>At PlantsPedia, we are committed to upholding the highest standards of accuracy, integrity, and relevance in everything we do. Our team works tirelessly to ensure that the information provided on our platform is current, reliable, and accessible to all.</p>
        </div>
        <div className='about_img1'>
          <img src={image5}/>
        </div>
      </div>
      <div className='about_end'>
        <div className='end-logo'>
          <img src={image6} />
        </div>
        <div className='end-content'>
          <p>We value your feedback and welcome any inquiries, suggestions, or collaboration opportunities. Please don't hesitate to reach out to us via email at contact@plantspedia.com or through our online contact form.</p>
        </div>
      </div>
    </>
  )
}

export default About