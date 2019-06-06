import React from 'react';
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
