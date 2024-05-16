import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./App.css"
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
 
function Signup(){
  const [username,setUsername]=useState('')
  const [pass,setPass]=useState('')
  const [conpass,setConpass]=useState('')
  const [email,setEmail]=useState('')
  const navigate=useNavigate()
  localStorage.setItem("name",username);
//validation
  function handleSubmit(e) {
    function validate(pass){
      const reg=/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]){6,}/
      return reg.test(pass)
    }
    e.preventDefault();
    if(validate(pass)){
      axios.post('http://127.0.0.1:3000/register', { username:username, email:email ,password:pass ,confirmpassword:conpass})
      .then(res => {
      console.log(res);
      console.log(pass);
        if(res.data.success){  
          console.log(res.data);
          if(pass===conpass){
            console.log(email)
            localStorage.setItem("ID",res.data._id)
            localStorage.setItem("show",username)
            localStorage.setItem("status",true)
            window.alert("registered");
            navigate('/signin');
            window.location.reload()
          }
          else{
              window.alert("password missmatch")
            }
        }
      else{
          window.alert("User Already Existing");
        }
      })
      .catch(err => {
        console.log(err);
        window.alert("something went wrong")
      });
    }
    else{ 
      window.alert("Password Should be strong, Should atleast contain 6")
    }
  }   
  return (
    <div className='signup-container'>
      <h2>SIGN UP FORM</h2>
        <div className='signup-form'>
          <form onSubmit={handleSubmit} >             
            <table cellSpacing="5px" cellPadding="5px">
              <tr>
                <td><label>Name:</label></td>
                <td><input type="text" id='username' name="username" onChange={(e)=> setUsername(e.target.value)} required/></td>
              </tr>
              <tr>
                <td><label>Email:</label></td>
                <td><input type="email" id='email' name="email"  onChange={(e)=> setEmail(e.target.value)} required/></td>
              </tr>
              <tr>
                <td><label>Password:</label></td>
                <td><input type='password' id='password' name='pass' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  onChange={(e) => setPass(e.target.value)} required/></td>
              </tr>
              <tr>
                <td><label>Confirm Password:</label></td>
                <td><input type='password' id='confirmpassword' name='conpass' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={(e)=> setConpass(e.target.value)} required/></td>
              </tr>
              <tr>
                <td colSpan="2" className='signup-submit'><button id='submit' onClick={handleSubmit}  type="submit" >SIGN UP</button></td>
              </tr>
              <hr/>
            </table>
          </form>
        </div>
        <p>Already User ?* <a href='signin'>Sign-in</a></p>
          <Link to="/signin"></Link>
    </div>
  )
}

export default Signup
