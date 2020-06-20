import React from 'react';
import { Box, Text, Image } from 'grommet'
import { IApplication } from './Types'
import { useDrag } from 'react-dnd';

interface AppcardProps {
  app: IApplication
}

export const Appcard: React.FC<AppcardProps> = ({ app }) => {
  const [{ opacity }, drag] = useDrag({
    item: { app, type: 'workload' },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })
  return(
    <Box ref={drag} style={{ opacity }}
      margin='small'
      align='center'
      direction='column' 
      border='bottom'
    >
      <Image fill='horizontal' fit='contain' alignSelf='stretch' src={app.Icon} />
      <Text truncate textAlign='center' size='small'>{app.Name}</Text>
    </Box>
  )
}
export default Appcard;
