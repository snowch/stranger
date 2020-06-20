import React, { useState } from 'react'
import { Box, Image, Layer, Form, FormField, TextInput, Button, Text } from 'grommet'
import { WorkloadContext } from './Contexts'

export const Workload: React.FC = () =>  {
  const [isOpen, setOpen] = useState(false)
  const [workload, setWorkload] = useState(React.useContext(WorkloadContext).workload)
  
  return(
    <Box 
      onClick={() => setOpen(true)}
      hoverIndicator
      focusIndicator={false}
      margin='small'
    >
      {/* <p>{JSON.stringify(workload)}</p> */}

      <Box height='small'>
        <Text alignSelf='center'>{workload.Name}</Text>
        <Image src={workload.Icon} fit='contain' />
        <Text alignSelf='center'>{workload.Capacity} TB</Text>
      </Box>

      { isOpen && 
        <Layer
        onEsc={()=> setOpen(false)}
        onClickOutside={()=> setOpen(false)}
      >
        <Box margin='small'>
          <Form
          value={workload}
          onChange={nextValue => setWorkload(nextValue)}
          onSubmit={() => { setOpen(false) }}
          >
            <FormField name="Name" label="Name">
              <TextInput name="Name" />
            </FormField>
            <FormField name="Capacity" label="Capacity">
              <TextInput type='number' name="Capacity" />
            </FormField>
            <FormField name="Performance" label="Performance">
              <TextInput type='number' name="Performance" />
            </FormField>
            <Button type="submit" primary label="Done" />
          </Form>
        </Box>
      </Layer>
  
      }
    </Box>
  )
}

export default Workload