import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import {
  ChevronLeft,
  ChevronRight,
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home
 } from '@mui/icons-material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Content from '../content/Content'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "Dashboard",
    linkTo: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Login",
    linkTo: "/login"
  },
  {
    listIcon: <Apps />,
    listText: "Register",
    linkTo: "/register"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    linkTo: "/contacts"
  }
];

const listItemSecond = [
  {
    listIcon: <Home />,
    listText: "Settings",
    linkTo: "/settings"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "About Us",
    linkTo: "/about-us"
  }
];

export default function PersistentDrawerLeft(props) {
  const theme = useTheme();
  const location = useLocation()

  const handleDrawerClose = () => {
    props.setOpenDrawer(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.isOpen}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listItems.map((listItem, index) => (
            <ListItem 
              component={Link} 
              key={index} 
              to={listItem.linkTo}
              selected={listItem.linkTo === location.pathname} 
              sx={(theme) => ({
                ...theme.typography.body,
                color: theme.palette.primary.main,
              })}
            >
              <ListItemIcon 
                sx={(theme) => ({
                  ...theme.typography.body,
                  color: theme.palette.primary.main,
                })}
              >
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText 
                primary={listItem.listText}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {listItemSecond.map((listItem, index) => (
            <ListItem 
              component={Link} 
              key={index} 
              to={listItem.linkTo}
              selected={listItem.linkTo === location.pathname} 
              sx={(theme) => ({
                ...theme.typography.body,
                color: theme.palette.primary.main,
              })}
            >
              <ListItemIcon 
                sx={(theme) => ({
                  ...theme.typography.body,
                  color: theme.palette.primary.main,
                })}
              >
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText 
                primary={listItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={props.isOpen}>
        <DrawerHeader />
        <Content />
      </Main>
    </Box>
  );
}
