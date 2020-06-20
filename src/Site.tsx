import React from 'react'
import { useDrop } from 'react-dnd'
import { Box } from 'grommet'
import { IApplication, getWorkloadFromApp } from './Types'
import { SiteContext, WorkloadContext } from './Contexts'
import Workload from './Workload'

export const Site: React.FC = () =>  {
  const { site } = React.useContext(SiteContext)

  const handleDrop = (item: {app: IApplication, type: string}) => {
    site.Apps?.push(getWorkloadFromApp(item.app))
    return site.Apps
  }

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ['workload'],
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop
  
  let backgroundColor = 'active'
  
  if (isActive) {
    backgroundColor = 'focus'
  } else if (canDrop) {
    backgroundColor = 'selected'
  }

  return(
    <Box ref={drop} 
      justify='between'
      alignContent='between'
      pad='xsmall'
      margin='xsmall' 
      fill='horizontal'
      background={ backgroundColor } 
      style={{ overflow: 'hidden', clear: 'both' }}
      elevation='xsmall'
      >
        {/* Site name or drop indicator */}
      {isActive
        ? 'Add to site ' + site.Name
        : site.Name }

      {/* Site content */}
      { 
        site.Apps && site.Apps.length > 0 
        && site.Apps.map((app, i) => 
          <WorkloadContext.Provider key={i} value={ { workload: getWorkloadFromApp(app)} }>
            <Workload />
          </WorkloadContext.Provider>
        )
      }

      {/* Site footer / description / messages */}
      <Box>{site.Message || site.Description}</Box>
    </Box>
  )
}
