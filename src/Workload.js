import React from 'react';
import { Box, Text, MaskedInput, RangeInput, Image } from 'grommet';
import * as Icons from 'grommet-icons';

export class Workload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {capacity:0};
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
      return (
        <Box 
          direction="row"
          justify="center"
          align="center"
          pad="large"
          margin="small"
          elevation="medium"
          background="light-1"
          gap="medium">
            <Icons.Apps size="large" />
            <Text>{this.props.Workload.Name}</Text>
            {/* <RangeInput
                value={this.state.capacity}
                onChange={event => this.setState({capacity: event.target.value})}
            /> */}
            <MaskedInput
              mask={[
                {
                regexp: /^[0-9]$/,
                },
                { placeholder: 'TB' }
              ]}
              value={this.state.capacity}
              min="0"
              max="10000"
              step="10"
              onChange={(event) => {this.setState({capacity: event.target.value })}}
              />
        </Box>
      );
    }
  }
