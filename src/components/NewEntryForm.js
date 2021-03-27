import React, {useState} from 'react';
import {Checkbox, Form, Segment} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

const NewEntryForm = ({onSubmit = ()=>{}}) => {


  const [label, setLabel]  = useState('');
  const [value, setValue]  = useState('');
  const [isExpense, setIsExpense]  = useState(false);


  function onSave(evt){
    onSubmit({label,value,isExpense:isExpense});
    setLabel('');
    setValue('');
    setIsExpense(false);
  }

  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input placeholder={"New Thing"} icon={"tags"} width={12} label={"Description"} value={label} onChange={(evt)=>setLabel(evt.target.value)}/>
        <Form.Input placeholder={"100.00"} icon={"dollar"} iconPosition={"left"} width={4} label={"Value"} value={value} onChange={(evt)=>setValue(evt.target.value)}/>
      </Form.Group>
      <Segment compact>
        <Checkbox toggle label={'Is expense?'} checked={isExpense}  onChange={() => setIsExpense((prev) => !prev)}/>
      </Segment>
      <ButtonSaveOrCancel onSave={onSave}/>
    </Form>
  );
};

export default NewEntryForm;
