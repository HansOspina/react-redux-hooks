import React from 'react';
import {Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

const NewEntryForm = ({onSubmit = ()=>{}, label,setLabel, value, setValue, isExpense, setIsExpense}) => {



  function onSave(evt){
    onSubmit({label,value,isExpense:isExpense});
    setLabel('');
    setValue('');
    setIsExpense(false);
  }

  return (
    <Form unstackable>
      <EntryForm
        label={label}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setLabel={setLabel}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel onSave={onSave}/>
    </Form>
  );
};

export default NewEntryForm;
