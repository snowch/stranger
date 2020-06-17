import React, { useState } from 'react';
import { Box, List, TextInput } from 'grommet'
import resources from './resources.json'
import Appcard from './Appcard';
import { Workload } from './IWorkload';
import { useDrag } from 'react-dnd'

const Content: React.FC = () =>  {
  const [apps, addToApps] = useState(Array<Workload>())
  const [filter, setFilter] = useState('')
 
  return(
      <Box direction='column'>
        <TextInput
          placeholder='Search application'
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
        <Box direction='row' height='120px'>
        {
          resources.Applications
            .filter(i => filter === '' || i.Name.toLowerCase().includes(filter.toLowerCase()))
            .map((wl, index) => <Appcard key={index} Name={wl.Name} Icon={wl.Icon} />)
        }
        </Box>
        <Box direction='row' >
          <List 
            data={apps} 
            primaryKey='Name' 
          />
        </Box>
      </Box>
    )
  }

export default Content;
