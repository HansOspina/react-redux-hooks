import React from 'react';
import {Button} from "semantic-ui-react";

const ButtonSaveOrCancel = ({onSave}) => {
  return (
    <Button.Group style={{marginTop:20}}>
      <Button>Cancel</Button>
      <Button.Or/>
      <Button primary onClick={onSave}>Save</Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
