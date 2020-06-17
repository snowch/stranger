import React from 'react';
import { Box, Text, Image } from 'grommet'
import { Workload } from './IWorkload'


export const Appcard: React.FC<Workload> = ({ Name, Icon = '' }) => 
  <Box 
    margin='small'
    align='center'
    direction='column' 
  >
    <Image fit='contain' alignSelf='stretch' src={Icon} />
    <Text textAlign='center'>{Name}</Text>
  </Box>

export default Appcard;
