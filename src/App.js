import React from 'react';
import GamesTable from './components/GamesTable/GamesTable';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container component="main" maxWidth="md">
      <h1>Jackbox Game Finder</h1>
      <GamesTable />
    </Container>
  );
}

export default App;
