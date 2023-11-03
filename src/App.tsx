import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Container, Grid, Paper, styled } from '@mui/material';

const App: FC = () => {
  return (
    <div style={{padding: "2px"}}>
      <Grid container spacing={2} style={{width: "100%"}}>
        <Grid item xs={12}>
          <Button variant='contained'>Teste</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' style={{backgroundColor: "red"}}>Teste</Button>
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
