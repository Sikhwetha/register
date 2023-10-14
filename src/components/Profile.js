import './App.css';
import React, { useState } from 'react';



const Profile = () => {
  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [gender, setGender] = useState('');


 
  const handleLogin = (user, userGender) => {
    if (user.trim() !== '') {
      setLoggedIn(true);
      setUsername(user);
      setProfileImage('https://placekitten.com/200/200');
      setGender(userGender);

    }
  };

  // Handle logout
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setProfileImage('');
    setGender('');
    
  };

  // Render UI
  return (
    <div className="app">
      {isLoggedIn ? (
        <ProfilePage
          username={username}
          profileImage={profileImage}
          gender={gender}
         
       
          onLogout={handleLogout}
        />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};


const LoginPage = ({ onLogin }) => {
 
  const [username, setUsername] = useState('');
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


const ProfilePage = ({ username, profileImage, gender, onLogout }) => {
  
  return (
    <div className="profile-page">
      <div className="profile-header">
      <h2>{username}'s Profile</h2>
        <div className='imag'>
          <img src={profileImage} alt="Profile" />
          <div className='flex-i'>
              <div>
                <p><strong>7</strong></p>
                <p>Post</p>
              </div>
              <div>
                <p><strong>1670</strong></p>
                <p>Follower</p>
              </div>
              <div>
                <p><strong>400</strong></p>
                
                <p>Followimg</p>
              </div>
          </div>
        </div>
        
        <div className='item'>
          <p><strong>Mulanga Bluewalker</strong></p>
          <p>System Developer</p>
          <p>Following</p>
          <p>Forex Trader</p>
        </div>
        
        <div className='butn'>
           <div className='di'>Edit profile</div>
           <div className='di'>Share profile</div>
           <div className='jj'>...</div>
        </div>
       
        <div className='item'>
          <p><strong>Story  highlights</strong></p>
          <p>keep your favorite strories on your profile</p>

        </div>

        <div className='flx'>
            <div><h>+</h></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
      <div className="profile-details">
        <p>
          <strong>Gender:male</strong> {gender}
        </p>
      
      </div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};


export default Profile;
