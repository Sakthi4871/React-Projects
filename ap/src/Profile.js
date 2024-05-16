import React from 'react'
import './App.css'
import useimg from './Images/user.png'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [userimage, setUserImage] = useState(null);
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const ID= localStorage.getItem("ID");
  const status=localStorage.getItem("status")
  const navigate = useNavigate()
  const [book,setBook]=useState()
  const [inquiry, setInquiry]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(ID);
      const response= await axios.post('http://127.0.0.1:3000/profile',{ ID });
      setUser(response.data);
      const un=response.data.email;
      const inquiryData= await axios.post('http://127.0.0.1:3000/inquirydata',{email:un})
      console.log(inquiryData.data);
      setInquiry(inquiryData.data)
      console.log(inquiry);
      if(inquiryData.data.email!==undefined){
        setBook(true);
      }else{
        setBook(false);
      }
    };
    fetchData();
  }, []);
  if (!user) {
    return <div>Loading...</div>;
  }
  const handleUpdate = async () => {
    try {
      setIsEditing(false);
      const show= user.username;
      localStorage.setItem("show",show);
      window.location.reload()
      const response = await axios.put('http://127.0.0.1:3000/updateprof', user);
      console.log(response.data);
      console.log(show);
     
    } catch (error) {
      console.error(error);
    }
  };

  if (isEditing) {
    return (
      <section>
        <div className='editP container section'>
          <div className='editP-from'>
            <h4 className='editHead'>Edit Profile:</h4>
            <form className='editContent'>
              <label>Name: </label>
              <input type="text" value={user.username} onChange={e => setUser({...user, username: e.target.value})} />
              <label>Email: </label>
              <input type="text" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
              <label>Password: </label>
              <input type="password" value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
              <button  className="btn" onClick={handleUpdate}>Save Changes</button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  if(status){
  return (
    <>
      <div className='Prof-container'>
        <div className='prof-img'>
          { userimage ?
            <img src={URL.createObjectURL(userimage)} alt="userimage"/>:
            <img src={useimg} alt=""  />
          }
          <input type="file" id="fileUpload" onChange={(e) => setUserImage(e.target.files[0])} style={{display: 'none'}} />
          <label htmlFor="fileUpload" className="imgbtn">Upload Image</label>
        </div>
        <div className="pData">
          <div className='prof-info'>
            <p><span>Name: </span> {user.username}</p>
            <p><span>Email ID: </span>{user.email}</p>
            <button className="btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        </div>
      </div>
      <div className="pCont_2">
        <div className="bookingDHeader">
          <h4>Inquiry Details:</h4>
        </div>
        <div className="inquiryDetails">
          {book ?
            <p>There is no booking currently</p>
                            :
          
                              inquiry.map((info)=>(
                              <div className='inquiryData' key={info.id}>
              
                                  <p className='dtls'><strong>Name:</strong>{info.username}</p>
                                  <p className='dtls'><strong>Email:</strong>{info.email}</p>
                                  <p className='dtls'><strong>Message:</strong>{info.message}</p>
                              
                    
                              </div>
                            ))}
      
  
        </div> 
      </div> 
    </>
  )
}else{
  navigate("/signin")
}
}
export default Profile
