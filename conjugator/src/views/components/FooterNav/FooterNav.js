import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 20),
    marginRight: theme.spacing(0.7)
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  icon: {
    marginRight: theme.spacing(0.7),
    width: 30,
    height: 40
  }
}));

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink color="inherit" to="/dashboard/" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Profile
        </NavLink>
        <NavLink color="inherit" to="/game" className={classes.link}>
          <WhatshotIcon className={classes.icon} />
          Game
        </NavLink>
        <Typography color="textPrimary" className={classes.link}>
          <NavLink color="inherit" to="/settings" className={classes.link}>
            <GrainIcon className={classes.icon} />
            Settings
          </NavLink>
        </Typography>
      </Breadcrumbs>
    </Paper>
  );
}
