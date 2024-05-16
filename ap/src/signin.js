import React, { useState } from 'react'
import "./App.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
  localStorage.getItem("show")
  localStorage.getItem("ID")

  
  const [inputs,setInputs]=useState({
    email:'',
    password:'',
      })
      const navigate=useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    try{
      axios.post("http://127.0.0.1:3000/login",inputs)
      .then(result=>{
        console.log(result);
        if(result.data.username){
          alert("Login successful");
          localStorage.setItem("show", result.data.username);
          localStorage.setItem('status', true)
          localStorage.setItem("ID",result.data._id)
          navigate("/")
          window.location.reload()
        }
      })
      
    }
    catch(e){
     console.log(e)
    }

  }
  return (    
    <div className='signin-container'>
      <h2>SIGN IN FORM</h2>
      <div className='signin-form'>
        <form onSubmit={handleSubmit}>
          <table cellSpacing="20px" cellPadding="10px">
            <tr>
              <td><label>Email:</label></td>
              <td><input type="email" id='email' name="email"  onChange={e=>setInputs({...inputs,email:e.target.value})} required/></td>
            </tr>
            <tr>
              <td><label>Password:</label></td>
              <td><input type='password' id='lgpswd' name='lgpswd' value={inputs.password} onChange={e=>setInputs({...inputs,password:e.target.value})} required/></td>
            </tr>
            <tr>
              <td colSpan="2" className='signin-submit'><Link><button onClick={handleSubmit} type='submit' id='submit' value="Submit">SIGN IN</button></Link></td>
            </tr>
          </table> 
        </form>
      </div>
    </div>  
  )
}

export default Signin;