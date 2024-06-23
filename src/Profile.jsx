import React, { useState } from 'react';
import axios from 'axios';


function Profile({ profileDetails, login, logout }) {


  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
};


  const triggerAutomation = async (email) => {
   
    alert(textareaValue)

    const data = {
      to: email,
      message: textareaValue
    };
    const jsonData = JSON.stringify(data);
    try {
      await axios.post('https://hooks.zapier.com/hooks/catch/19237939/2b1dphj/', jsonData).then((response) => {
              alert("Email sent successfully");
           });

      
 

    } catch (error) {
      
      console.error('Error sending the email:', error);
    
    }

  };
  console.log(profileDetails)
  return (
    <>
  
      <div className='profile-container'>
        {
          profileDetails.length != 0 ? (
            <div className="profile-details">
              <img src={profileDetails.picture} alt="" className='profile-avathar' />
              <div className="profile-content">
                <h3>{profileDetails.name}</h3>
                <h5>{profileDetails.email}</h5>
                
              </div>

              <div className="container mt-1">
              <h1>Invoice Reminder and Follow-up Automation with Zapier Integration</h1>
              <br></br><br></br>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Recipient Name</th>
            <th>Email</th>
            <th>Email Content</th>
            <th>Invoice Amount</th>
            <th>Due Date</th>
            <th>Actions</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Jeffery</td>
            <td>jeffreyjoel.tsa@gmail.com</td>
            <td> <textarea
                            value={textareaValue}
                            onChange={handleTextareaChange}
                        /></td>
            <td>45200</td>
            <td>21/02/2024</td>
            <td>
            
              <button className="btn btn-primary" onClick={() => triggerAutomation("jeffreyjoel.tsa@gmail.com") }>Send Reminder</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Joel</td>
            <td>joel.pandian@gmail.com</td>
            <td> <textarea
                            value={textareaValue}
                            onChange={handleTextareaChange}
                        /></td>
            <td>45200</td>
            <td>21/02/2024</td>
            <td>
            
              <button className="btn btn-primary" onClick={() => triggerAutomation("joel.pandian@gmail.com") }>Send Reminder</button>
            </td>
          </tr>
          
      
          
        </tbody>
      </table>
    </div>
             

              <button className='profile-button' onClick={logout}>Logout</button>
            </div>
          ) :
            (
              <>
                <div className="landing-container">
                  <div className="landing-icon">
                    <h1>📅</h1>
                  </div>
                  <h4>Sign in to your account!</h4>
                  <button onClick={login}>Sign in with google</button>
                </div>
              </>
            )
        }
      </div>
    </>
  )
}

export default Profile