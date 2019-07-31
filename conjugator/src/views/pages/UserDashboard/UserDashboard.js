import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function UserDashboard() {

  const message = useSelector(state => state.message);

    return (
    <div>
        <Container maxWidth="lg">
                <h1>
                    {message}
                </h1>
                
                <Typography component="h2">
                    Data & Stats Stuff Here
                </Typography>
        </Container>
    </div>
  )
}

export default UserDashboard;
