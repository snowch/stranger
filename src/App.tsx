import React from 'react';
import { Grommet, Box, Header, Nav, Heading, Footer, Text } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import Content from './Content'

const App: React.FC = () => {
  return (
    <Grommet full theme={hpe} themeMode='dark'>
      <Box fill="vertical" align="stretch" justify="start" direction="column" >
        <Header align="center" direction="row" justify="between" fill="horizontal" border={{"side":"bottom","style":"solid","size":"small","color":"brand"}}
          background="brand">
            <Nav align="center" flex={false} direction="row-responsive" justify="start" fill="horizontal">
              <Heading level="3" margin="small">
                Home
              </Heading>
              <Text>
                Project
              </Text>
            </Nav>
        </Header>
        <Box align="stretch" justify="start" direction="column" pad="small" fill>
          <Content />
        </Box>
        <Footer align="center" direction="row" flex={false} justify="between" gap="medium" background="neutral-3" fill="horizontal">
          <Text>
            Erdinc Kaya @ 2020
          </Text>
        </Footer>
      </Box>
      </Grommet>
  );
}

export default App;
