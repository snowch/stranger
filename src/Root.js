import React from 'react';
import { Box } from 'grommet';
import { Workload } from './Workload';

export class Root extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const Resources = require("./Resources.json");
      return (
          <Box fill flex >
            <h3>Workloads</h3>
            <Box flex>
                {
                    Resources.Applications.map(wl => 
                        <Workload key={wl.Name} Workload={wl}>{wl.Name}</Workload>
                    )
                }
            </Box>
            <Box>
                <h4>Here comes the recommendations</h4>
            </Box>
        </Box>
      );
    }
  }
