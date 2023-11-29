import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {

  return (
      <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <b>GAMES</b>
          </Typography>
          <Button color="inherit" component={Link} to="/home"  sx={{ '&:hover': { backgroundColor: 'white' ,color:'black' } }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/spinTheWheel" sx={{ '&:hover': { backgroundColor: 'white' ,color:'black' } }}>
            Spin The Wheel
          </Button>
          <Button color="inherit" component={Link} to="/hotSlot" sx={{ '&:hover': { backgroundColor: 'white' ,color:'black' } }}>
            Hot Slot
          </Button>
          <Button color="inherit" component={Link} to="/scratchCard" sx={{ '&:hover': { backgroundColor: 'white' ,color:'black' } }}>
            Scratch Card
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}