import React from 'react';
import { Grommet, CheckBox } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import Projects from './Projects'

enum themeType {
  dark = 'dark',
  light = 'light'
}

const App: React.FC = () => {
  const [mode, setMode] = React.useState(themeType.dark)
  const isDark = mode === themeType.dark
  const themeSelector = 
    <CheckBox 
      checked={isDark} 
      onChange={() => mode === themeType.dark ? setMode(themeType.light) : setMode(themeType.dark)} />
  return (
    <Grommet full theme={hpe} themeMode={mode}>
      <Projects themeSelector={themeSelector} />
    </Grommet>
  );
}

export default App;
