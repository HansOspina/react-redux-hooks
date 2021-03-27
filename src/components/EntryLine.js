import React from 'react';
import {Grid, Icon, Segment} from "semantic-ui-react";

const EntryLine = ({entry:{id, isExpense = false, value, label}, onDelete}) => {
  return (
    <Segment color={isExpense ? "red":"green"}>
      <Grid columns={3} textAlign={"right"}>
        <Grid.Column width={10} textAlign={"left"}>{label}</Grid.Column>
        <Grid.Column width={3} textAlign={"right"}>{value}</Grid.Column>
        <Grid.Column width={3}>
          <Icon name={"edit"} bordered/>
          <Icon name={"trash"} onClick={() => onDelete(id)}/>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default EntryLine;
