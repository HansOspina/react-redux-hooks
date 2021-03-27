import React from 'react';
import {Button, Modal} from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({isOpen, setIsOpen, onSubmit = ()=>{}, label,setLabel, value, setValue, isExpense, setIsExpense}) => {
  return (
    <Modal open={isOpen}>
        <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          label={label}
          value={value}
          isExpense={isExpense}
          setValue={setValue}
          setLabel={setLabel}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen()}>Close</Button>
        <Button onClick={() => setIsOpen()} primary>OK</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
