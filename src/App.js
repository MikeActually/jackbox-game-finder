import React from 'react';
import { Container } from '@material-ui/core';
import JackboxGames from './pages/JackboxGames/JackboxGames';

function App() {
  return (
    <Container component="main" maxWidth="md">
      <h1>Jackbox Game Finder</h1>
      <JackboxGames />
    </Container>
  );
}

export default App;
