import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Stack, Button } from '@mui/material';

const Enter = () => {
  return (<Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      gap: '20px',
    }}
  >
    <h1>Welcome to the Login Page</h1>
    <Stack direction="row" spacing={3}>
      <Button
        component={Link}
        to="/signin"
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
      <Button
        component={Link}
        to="/signup"
        variant="outlined"
        color="secondary"
      >
        Sign Up
      </Button>
    </Stack>
  </Box>
);
};

export default Enter;