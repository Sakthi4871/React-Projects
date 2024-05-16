import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import './App.css'

function Footer() {
  return (
    <>
        <div className='footer-container'>
            <div className='footer'>
                <p className='foot-title'>Main menu</p>
                <div className='foot-links'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="plants">Plants</Link></li>
                        <li><Link to="gallery">Gallery</Link></li>
                    </ul>
                </div>   
            </div>
            <div className='footer'>
                <p className='foot-title'>Policies</p>
                <div className='foot-links'>
                    <ul>
                        <li><Link to="privacy">Privacy Policy</Link></li>
                        <li><Link to="terms">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
            <div className='footer'>
                <p className='follow'>Follow us </p>
                <Link className='social' to="https://www.facebook.com/"><FaFacebookSquare /></Link> <Link className='social' to="https://www.instagram.com/?hl=en"><BsInstagram /></Link> <Link className='social' to="https://twitter.com/?lang=en-in"><FaTwitterSquare /></Link>  
            </div>
            <div className='footer'>
                <p className='foot-title'>Get In Touch</p>
                <div className='foot-links'>
                    <ul className='connect'>
                        <li><p>Call: +91-9898-6798-54</p></li>
                        <li><p>Email: support@plantpedia.com</p></li>
                    
                    </ul>
                </div>
            </div>
            <div className='rights'>
                <hr />
                <p>Copyright © 2024 PlantPedia Nursery.</p>
            </div>
        </div>
    </>
  )
}

export default Footer