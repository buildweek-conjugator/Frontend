import React, { useState } from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

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

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { createMuiTheme } from '@material-ui/core/styles';

import { logout } from '../../../state/actions';
import './MenuAppBar.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F2C84B'
    }
  }
});

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

function MenuAppBar() {

  const store = useStore()
  const dispatch = useDispatch();

  const authStatus = localStorage.getItem("auth");

  const classes = useStyles();
  const [auth, setAuth] =  React.useState(localStorage.getItem("auth"));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const [menuState, setMenuState] = useState(false);

  function handleUserMenu(event) {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  }

  function handleMenu(event) {
    setMenuState(!menuState);
    console.log(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogout() {
    setAuth(false);
    dispatch(logout());
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" theme={theme}>
          <Toolbar>
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
                  <NavLink className="dropButton" to="/dashboard">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </NavLink>
                  <NavLink className="dropButton" to="/settings">
                    {' '}
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                  </NavLink>
                  <NavLink className="dropButton" to="/game">
                    {' '}
                    <MenuItem onClick={handleClose}>Game</MenuItem>
                  </NavLink>
                  <NavLink className="dropButton" to="/">
                    {' '}
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                    {' '}
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </NavLink>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>

      </ThemeProvider>
    </div>
  );
}
export default  MenuAppBar