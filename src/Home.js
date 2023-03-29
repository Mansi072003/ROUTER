import { Button } from '@mui/material';
import Link from 'react-router-dom';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>THIS IS HOME</h1>
      <Button variant="outline">
        <Link to='./About'>ABOUT</Link>
      </Button>
      <Button variant="outline">
        <Link to='./Contact'>CONTACT</Link>
      </Button>
    </div>
  );
}

export default Home
