import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnterUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Add your registration logic here
    navigate('/'); // Redirect back to Sign In after successful registration
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Enter your username" /><br />
      <input type="password" placeholder="Enter your password" /><br />
      <input type="password" placeholder="Confirm your password" /><br />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/')}>Sign In</span>
      </p>
    </div>
  );
};

export default EnterUp;
