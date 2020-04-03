import React, { useState } from 'react';
import { Box, List } from 'grommet'
import resources from './resources.json'

const Content: React.FC = () =>  {
  const [apps, addToApps] = useState([])
 
  return(
      <Box direction="column">
        <List 
          data={resources.Applications} 
          primaryKey="Name" 
          secondaryKey="Scale"
          onClickItem={(list: any) => addToApps(apps.concat(list.item))}
         />
        <List data={apps} primaryKey="Name" />
      </Box>
    )
  }

export default Content;
