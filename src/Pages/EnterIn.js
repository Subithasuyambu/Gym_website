import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnterIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add your login validation logic here
    navigate('/home'); // Redirect to Home after successful login
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sign In</h1>
      <input type="text" placeholder="Enter your username" /><br />
      <input type="password" placeholder="Enter your password" /><br />
      <button onClick={handleSignIn}>Sign In</button>
      <p>
        Don't have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign Up</span>
      </p>
    </div>
  );
};

export default EnterIn;
