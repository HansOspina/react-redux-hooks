import React, {Fragment} from 'react';
import {Checkbox, Form, Segment} from "semantic-ui-react";

const EntryForm = ({isExpense = false, setIsExpense, value, setValue, label, setLabel}) => {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input placeholder={"New Thing"} icon={"tags"} width={12} label={"Description"} value={label} onChange={(evt)=>setLabel(evt.target.value)}/>
        <Form.Input type="number" min="0.00" max="10000.00" step="0.01"  placeholder={"100.00"} icon={"dollar"} iconPosition={"left"} width={4} label={"Value"} value={value} onChange={(evt)=>setValue(evt.target.value)}/>
      </Form.Group>
      <Segment compact>
        <Checkbox toggle label={'Is expense?'} checked={isExpense} onChange={() => setIsExpense((prev) => !prev)}/>
      </Segment>
    </Fragment>
  );
};

export default EntryForm;
