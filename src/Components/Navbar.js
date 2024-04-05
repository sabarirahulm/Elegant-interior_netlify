import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Pages/Img and vid/logo of ET5.png'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuOpen(open);
  };

  const list = () => (
    <Box
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{padding:'25px'}}
    >
      <List className="nav-item">
        {['Home', 'Design Gallery', 'Modular Kitchen', 'Living Room', 'Bedroom', 'Bathroom', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <Link to={index === 0 ? '/' : `/${text.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link">
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <IconButton onClick={toggleDrawer(false)} sx={{ position: 'absolute', top: 10, right: 10 }}>
        <ClearIcon />
      </IconButton>
    </Box>
  );

  return (
    <div className="Container">
      <nav>
        <h3 className="logo">ELEGANT INTERIOR <span className="dot">.</span></h3>
        <ul className={isMenuOpen ? 'menu-open' : ''}>
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/design-gallery" className="nav-link">Design Gallery</Link></li>
          <li className="nav-item"><Link to="/modular-kitchen" className="nav-link">Modular Kitchen</Link></li>
          <li className="nav-item"><Link to="/living-room" className="nav-link">Living Room</Link></li>
          <li className="nav-item"><Link to="/bedroom" className="nav-link">Bedroom</Link></li>
          <li className="nav-item"><Link to="/bathroom" className="nav-link">Bathroom</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <IconButton onClick={toggleDrawer(true)} className="menuiocon">
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={isMenuOpen}
          onClose={toggleDrawer(false)}
          sx={{height:'auto'}}
        >
          {list()}
        </Drawer>
      </nav>
    </div>
  );
}

export default Navbar;
