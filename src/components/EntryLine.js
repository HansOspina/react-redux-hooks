import React, {Fragment} from 'react';
import {Grid, Icon, Segment} from "semantic-ui-react";

const EntryLine = ({entry:{id, isExpense = false, value, label}, onDelete, editEntry}) => {



  return (
    <Fragment key={id}>
    <Segment color={isExpense ? "red":"green"}>
      <Grid columns={3} textAlign={"right"}>
        <Grid.Column width={10} textAlign={"left"}>{label}</Grid.Column>
        <Grid.Column width={3} textAlign={"right"}>${value}</Grid.Column>
        <Grid.Column width={3}>
          <Icon name={"edit"} bordered onClick={() => editEntry(id)}/>
          <Icon name={"trash"} onClick={() => onDelete(id)}/>
        </Grid.Column>
      </Grid>
    </Segment>

    </Fragment>
  );
};

export default EntryLine;
