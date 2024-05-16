import React from 'react'
import image1 from"./Images/contact_bg.jpg"
import { GrLocation } from "react-icons/gr";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function Inquiry() {
  const emailk="yuvanamula@gmail.com";
  const address="Cognizant siruseri";
  const form = useRef();
  const [to_name,setTo_name]=useState('')
  const [from_name,setfrom_name]=useState('')
  const [message,setMessage]=useState('')
  const navigate=useNavigate();
  const status=localStorage.getItem("status")
  const sendEmail = (e) => {
    e.preventDefault();

    if(status){
      emailjs
      .sendForm('service_2i0ez89', 'template_c9x9ykg', form.current, {
        publicKey: 'fIQ0cp523vvmy2eE3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("Message sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      axios.post('http://127.0.0.1:3000/inquiry', {username: to_name, email:from_name ,message :message})
      .then(res => {
        console.log('Data sent to DB');
        alert('Form Submitted')
      })
      .catch(e=>{
        console.log('Unable to send server');
      })
    }
    else{
      alert("To raise a Inquiry, Please Signup..!")
      navigate("/signup")
    }

  };
  
  return (
    <>
      <div className='bg-container'>
        <div className='contact_bg'>
          <h1>Contact</h1>
        </div>
      </div>
      <div className='inquiry-container'>
        <div className='inquiry-form'>
          <h1>Get the <span>Information</span></h1>
          <p>Are you looking for information about Plant? Please fill our this form to get in touch with us!</p>
          
          <form ref={form} onSubmit={sendEmail}>
          
            <table cellPadding="5px">
              <tr>
                <td><input type='text' onChange={(e)=>{setTo_name(e.target.value)}} name='to_name'placeholder='Name' /></td>
              </tr>
              <tr>
                <td><input type='email'name='from_name' onChange={(e)=>{setfrom_name(e.target.value)}} placeholder='Email' /></td>
              </tr>
              <tr>
                <td><textarea name='message' onChange={(e)=>{setMessage(e.target.value)}} rows="5" cols="35"></textarea></td>
              </tr>
              <tr>
                <td><button onClick={sendEmail} className='inquiry-submit'>Submit</button></td>
              </tr>
            </table>
          </form>
        </div>
        <div className='inquiry-connect'>
          
          <div className='inquiry-links'>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target='_blank' rel='noopener noreferer'> <GrLocation /> Open the Address in Google maps</a><br/><br/>
            <a href={`mailto:${emailk}`}> <MdOutlineAttachEmail /> contact@plantpedia.org.in</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inquiry
