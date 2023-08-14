import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../../css/Navbar.css"
import { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className='bgnav'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
          
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            TO DO
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' },flexGrow: 7}}>
            {navItems.map((item) => (
              <Button className='boton1' style={{visibility:"hidden"}} key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box    sx={{ flexGrow: 14, display: { xs: 'none', sm: 'block' } }}>
          <form >
      <input className='form-control barsearch' style={{width:"30rem"}} type="search"  aria-label="Search"
       name='searchnav'
       onChange={props.handlechange}
      ></input>
      
    </form>
          </Box>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle  />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                
                <MenuItem onClick={props.sessionClose}>Cerrar Sesion</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
     
     
    </Box>
  );
}



export default DrawerAppBar;
