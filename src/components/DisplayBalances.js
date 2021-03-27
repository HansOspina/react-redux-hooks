import React from 'react';
import {Grid, Segment} from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = ({balances = []}) => {


  function renderBalance(balance){
    return (
      <Grid.Column>
        <DisplayBalance label={balance.label} value={balance.value} color={balance.color} size={"tiny"}/>
      </Grid.Column>
    )
  }

  return (
    <Segment textAlign="center">
      <Grid columns={balances.length}>
        <Grid.Row>
          {
            balances.map(balance => renderBalance(balance))
          }
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
