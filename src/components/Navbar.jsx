import { AppBar, Box, IconButton, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
                        EMPLOYEE
                    </Typography>
                    
                    <Button color="inherit"><Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link></Button>
                    <Button color="inherit"><Link to={'/employee'} style={{textDecoration:'none', color:'white'}}>Employee</Link></Button>
                    
                </Toolbar>
            </AppBar>
        </Box>
  )
}

export default Navbar