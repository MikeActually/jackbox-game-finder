import React from 'react';
import './App.css';
import GamesTable from './components/GamesTable/GamesTable';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container component="main" maxWidth="md">
      <div className="App">
        <h1>
          Jackbox Game Finder
      </h1>
        <GamesTable />
      </div>
    </Container>
  );
}

export default App;
