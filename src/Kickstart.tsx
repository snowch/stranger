import React, { Component } from 'react'
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  RadioButtonGroup,
  Select,
} from "grommet";

class Kickstart extends Component<{dataCallback: Function}> {
  render () {
    const { dataCallback } = this.props;
    return (
      <Box fill="vertical" overflow="auto" align="start" flex="grow" direction="column" justify="start" pad="medium">
        <Form onSubmit={(event: any) => dataCallback(event.value)}>
          <FormField name="name" label="Name" required={true} />
          <FormField
            label="Continent"
            name="select"
            component={Select}
            options={["North America", "South America", "Asia"]}
          />
          <FormField name="address" label="Address" />
          <FormField
            name="acknowledge"
            component={CheckBox}
            pad={true}
            label="acknowledge"
          />
          <FormField
            name="day"
            component={RadioButtonGroup}
            pad={true}
            options={["Tuesday", "Friday"]} 
          />
          <Button type="submit" label="Submit" primary={true} />
        </Form>
      </Box>
    )  
  }
}
export default Kickstart;
