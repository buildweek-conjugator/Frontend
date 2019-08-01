import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { createMuiTheme } from '@material-ui/core/styles';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import './MenuAppBar.scss';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#AA151B',
    }
  }
});

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user_open = Boolean(anchorEl);
  const open = Boolean(anchorEl);
  const main_open = Boolean(anchorEl);
  const [menuState , setMenuState] = useState(false);


  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleUserMenu(event) {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  }

  function handleMenu(event) {
    setMenuState(!menuState);
    console.log(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" theme={theme}>
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            {/*   <MenuIcon  */}
            {/*     onClick={handleMenu}  */}
            {/*     aria-haspopup="true" */}
            {/*     open={open} */}
            {/*     onClose={handleClose} */}
            {/*   /> */}
            {/*     <StyledMenu */}
            {/*     id="customized-menu" */}
            {/*     anchorEl={anchorEl} */}
            {/*     keepMounted */}
            {/*     open={Boolean(anchorEl)} */}
            {/*     onClose={handleClose} */}
            {/*     > */}
            {/*     <StyledMenuItem> */}
            {/*       <ListItemIcon> */}
            {/*         <SendIcon /> */}
            {/*       </ListItemIcon> */}
            {/*       <ListItemText primary="Sent mail" /> */}
            {/*     </StyledMenuItem> */}
            {/*     <StyledMenuItem> */}
            {/*       <ListItemIcon> */}
            {/*         <DraftsIcon /> */}
            {/*       </ListItemIcon> */}
            {/*       <ListItemText primary="Drafts" /> */}
            {/*     </StyledMenuItem> */}
            {/*     <StyledMenuItem> */}
            {/*       <ListItemIcon> */}
            {/*         <InboxIcon /> */}
            {/*       </ListItemIcon> */}
            {/*       <ListItemText primary="Inbox" /> */}
            {/*     </StyledMenuItem> */}
            {/*     </StyledMenu> */}
            {/*    */}
            {/* </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              Conjugator
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleUserMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <NavLink to="/settings">
                    {' '}
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                  </NavLink>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
      </ThemeProvider>
    </div>
  );
}
