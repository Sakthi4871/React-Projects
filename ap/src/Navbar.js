import React, { useContext, useState } from 'react'
import bg_logo from "./Images/logo1.mp4";
import { Link ,NavLink } from 'react-router-dom';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { navItems } from './NavItems';
// import Dropdown from './pages/Dropdown';
import{ useStateValue } from './signin';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { BsEmojiSmile } from "react-icons/bs";

 
function Navbar() {
  const[menuOpen, setMenuOpen] =useState(false)
  const [active, setActive] = useState('navBar')
  const show=localStorage.getItem('show')
 
  //Function to toggle navBar
  const showNav =()=>{
    setActive('activeNavbar')
  }
 
  //Function to remove navBar
  const removeNav =()=>{
    setActive('navBar')
  }



  const[first, setFirst]=useState(false);
  const LoggedIn = localStorage.getItem("status");
  function clear(){
    // setFirst(!first)
    localStorage.removeItem("status");
    window.location.reload();
}
   return (
    <div className="main-header">
      <div className="main-logo">
        <video src={bg_logo} autoPlay muted loop/>
        
      </div>
      <div className='menu' onClick={() =>{setMenuOpen(!menuOpen); }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="list">
 					<ul className={menuOpen ? "open": ""} onClick={()=> setMenuOpen(false)}>
            {navItems.map(item=>{
              return(
                <li className='menu-list' key={item.id}>
                  <NavLink to= {item.path}>{item.title}</NavLink>
                  {/* {value?(<NavLink to= {item.path}>{item.title}</NavLink>):(<NavLink to= "/signin">Signin</NavLink>)} */}
                </li>
              )
            })}
            {!LoggedIn ? <li className='menu-list'><NavLink to='/signup' >SignUp</NavLink></li>:
            <li className="wlcName menu-list" onClick={()=>setFirst(!first)} >Welcome {show} <BsEmojiSmile className='icon' /></li>
              }
 					</ul>   
      </div>
      {first && active=== 'navBar' ?
        <div className='logoutClass'>
          <ul className='classitem'>
            <li onClick={clear}>Logout</li>
            <li><Link onClick={()=>setFirst(!first)} to='/profile'>Profile</Link></li>
          </ul>
        </div>   
        : ""
      }  
    </div>
   )
 }




 
 export default Navbar
























// function Navbar() {
//     const[menuOpen, setMenuOpen] =useState(false)
//     return(
            
//     <div className="main-header">
//         <div className="main-logo">
//           <img className="logo-img" src={plantlogo2} alt="Logo" />
//         </div>
//         <div className='menu' onClick={() =>{
//             setMenuOpen(!menuOpen);
//         }}>
//         <span></span>
//         <span></span>
//         <span></span>
//         </div>  

//         <div className="list">
// 					<ul className={menuOpen ? "open": ""} onClick={()=> setMenuOpen(false)}>
// 						<li><Link to="/">Home</Link></li>
// 						<li><Link to="gallery">Gallery</Link></li>
// 						<li><Link to="plants">Plants</Link></li>
// 						<li><Link to="about">About</Link></li>
//             <li><Link to="signup"><button className='inquiry-button'>Signin/SignUp</button></Link></li>
//             <li><button className="inquiry-button" >Inquiry</button></li>
// 					</ul>
// 				</div>
//         <button className='mobile-menu-icon'>
//           {menuOpen ? (<i className='fas fa-times'></i>):(<i className='fas fa-bars'></i>)}
//         </button>
        
// 			</div>

//   )
// }

// export default Navbar