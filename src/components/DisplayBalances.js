import React from 'react';
import {Grid, Segment} from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = ({balances = []}) => {




  return (
    <Segment textAlign="center">
      <Grid columns={balances.length}>
        <Grid.Row>
          {
            balances.map(balance => (
              <Grid.Column key={balance.id}>
                <DisplayBalance label={balance.label} value={balance.value} color={balance.color} size={"tiny"}/>
              </Grid.Column>
            ))
          }
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
