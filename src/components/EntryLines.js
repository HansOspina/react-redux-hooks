import React from 'react';
import {Container} from "semantic-ui-react";
import EntryLine from "./EntryLine";

const EntryLines = ({entries = [], onDelete, editEntry}) => {
  return (
    <Container>
      {
        entries.map(entry => {
          return (
            <EntryLine key={entry.id} entry={entry} onDelete={onDelete} editEntry={editEntry}/>
          )
        })
      }
    </Container>
  );
};

export default EntryLines;
