import React, { useState } from 'react';
import { Box, TextInput, Button, CheckBox } from 'grommet'
import resources from './resources.json'
import Appcard from './Appcard';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Site } from './Site';
import { Add } from 'grommet-icons'
import { IApplication, ISite } from './Types'
import { SiteContext } from './Contexts';

interface myProps {
  themeSelector: HTMLInputElement
}

const Content: React.FC<myProps> = (props) =>  {
  const background = 'active'
  const primarySite: ISite = {
    Name: 'DC1',
    Description: 'Primary Data Center',
    Apps: []
  }
  
  const secondarySite: ISite = { 
    Name: 'DC2', 
    Description: 'Secondary DC',
    Apps: []
  }
  
  const [filter, setFilter] = useState('')
  const [sites, setSites] = useState([primarySite])

  const allApps: IApplication[] = resources.Applications

  return(
      <Box direction='column' pad='small' fill>
        <Box direction='row' pad='small' >
          {/* Add theme selector */}
          {props.themeSelector}
          <TextInput
            placeholder='Search application'
            value={filter}
            onChange={event => setFilter(event.target.value)}
          />
          {/* Add secondary site */}
          { sites.length === 1 &&
            <Button
            size='small'
            onClick={() => setSites([...sites, secondarySite])}
          ><Add /></Button>
          }
        </Box>
        <DndProvider backend={HTML5Backend}>
          <Box direction='row' height='120px' background={background} margin='xsmall'>
          {
            allApps
              .filter(i => filter === '' || i.Name.toLowerCase().includes(filter.toLowerCase()))
              .map((item, index) => <Appcard key={index} app={item} />)
          }
          </Box>
          <Box direction='row' fill>
          {
            sites.map((site, index) => 
              <SiteContext.Provider value={{ site }} key={index}>
                <Site />
              </SiteContext.Provider>
            )
          }
          </Box>
        </DndProvider>
      </Box>
    )
  }

export default Content;
