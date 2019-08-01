import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';

import { login } from '../../../state/actions';
import './Authentication.scss';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignUp(props) {
  const classes = useStyles();

  const initialFormState = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    action: 'signup',
    headerText: 'Sign Up Now!',
    altAction: 'Already have an account? Sign in',
    buttonText: 'Sign Up'
  };

  function handleSubmit(event) {
    event.preventDefault();
    const action = user.action;
    const credentials = { email: user.email, password: user.password };
    if (action == 'login') {
      dispatch(login(credentials)).then(res => {
        if (res) {
          console.log(res);
          props.history.push('/dashboard');
        }
      });
    }
    // Axios.post('someUrl/signup',user)
    //   .then(response => /*data*/
    //     localStorage.setItem ('token', response.data.token)
    //   )
  }
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    console.log(user);
    setUser(updatedUser);
  };
  // const foo = useSelector(state => state.foo);

  const dispatch = useDispatch();

  const toggleForm = e => {
    e.preventDefault();
    if (user.action === 'login') {
      setUser(initialFormState);
    } else {
      const updatedForm = {
        ...user,
        headerText: 'Welcome Back! Sign in Below!',
        altAction: 'Create An Account to Start Conjugating!',
        action: 'login',
        buttonText: 'Sign In'
      };
      setUser(updatedForm);
    }
  };

  class FormSignUp extends React.Component {
    render() {
      return (
        <>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              onChange={handleInputChange}
            />
          </Grid>
        </>
      );
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" id="header-text">
          {/* Form Toggle Logic -- Same logic for the button and toggle link */}
          {user.headerText}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Render the 2 fields in FormSignUp if action = signup */}
            {user.action === 'signup' ? <FormSignUp /> : null}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {user.buttonText}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={toggleForm}>
                {user.altAction}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default SignUp;

