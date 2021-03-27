import React from 'react';
import {Container} from "semantic-ui-react";
import EntryLine from "./EntryLine";

const EntryLines = ({entries = [], onDelete}) => {
  return (
    <Container>
      {
        entries.map(entry => {
          return (
            <EntryLine key={entry.id} entry={entry} onDelete={onDelete} />
          )
        })
      }
    </Container>
  );
};

export default EntryLines;
