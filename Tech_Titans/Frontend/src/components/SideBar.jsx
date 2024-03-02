import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const SideBar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          background: 'transparent',
          borderRight: '1px solid #fff',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List sx={{padding:'16px',color:'#fff'}}>
        <ListItem component={Link} to="/Dashboard" button sx={{marginBottom:'19rem'}}>
          <ListItemText primary="Dashboard" 
          primaryTypographyProps={{ 
            variant: 'h5', 
            fontWeight: 'bolder', 
            fontSize: '25px',
            fontFamily: 'Times New Roman'
          }} />
        </ListItem>
        <ListItem component={Link} to="/security" button>
          <ListItemText primary="Security Settings" />
        </ListItem>
        <ListItem component={Link} to="/contact-us" button>
          <ListItemText primary="Contact us" />
        </ListItem>
        <ListItem component={Link} to="/support" button>
          <ListItemText primary="Help And Support" />
        </ListItem>
        <ListItem component={Link} to="/service" button>
          <ListItemText primary="Terms of Service" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;






