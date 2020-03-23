import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
// import './App.css';
import { Root } from './Root';

function App() {
  return (
    <div className="App">
      <Grommet full theme={hpe}>
        <Root />
      </Grommet>
    </div>
  );
}

export default App;
