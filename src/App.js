import './App.css';

import {useEffect, useState} from 'react';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {

  const [balances, setBalances] = useState([
    {label: "Income:", value: "12000.00", color: "green"},
    {label: "Expenses:", value: "1100.00", color: "red"}
  ]);

  const [entries, setEntries] = useState([
    {id: "1", label: "gas", value: "1200.00", isExpense: true},
    {id: "2", label: "internet", value: "110.00", isExpense: true},
    {id: "3", label: "books", value: "50.00", isExpense: false},
  ]);

  const [total, setTotal] = useState(0);

  const [id, setId] = useState();
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



    function resetEntry(){
      setLabel('');
      setValue('');
      setId('');
      setIsExpense(false);
    }

  useEffect(() =>{
    if(!isOpen && id){
      const index = entries.findIndex(e => e.id ===id);
      const newEntries = [...entries];
      newEntries[index].label = label;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

    useEffect(()=>{
      const totals = entries.reduce((previous, value) => {
        console.log(previous);
        if(value.isExpense){
          previous.ex += parseFloat(value.value);
        }else{
          previous.in += parseFloat(value.value);
        }

        return previous;

      },{ex:0.0, in:0.0});


      setBalances( balances => {
        balances[0].value = totals.in.toString();
        balances[1].value = totals.ex.toString();
        return [...balances];
      });
      setTotal(totals.in - totals.ex);

    },[entries]);

  function onAddEntry(entry) {
    entry.id = entries.length + 1;
    setEntries(entries => entries.concat(entry));
  }

  function onDeleteEntry(entryId) {
    setEntries(entries => entries.filter(val => val.id !== entryId));
  }

  function editEntry(id) {
    console.log(id);
    const idx = entries.findIndex(entry => entry.id === id);
    const entry = entries[idx];
    setId(entry.id);
    setLabel(entry.label);
    setValue(entry.value);
    setIsExpense(entry.isExpense);
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }


  return (
    <Container>
      <MainHeader title={"Budget"} type={"h1"}/>
      <DisplayBalance label={"yourBalance:"} value={total} size={"small"}/>
      <DisplayBalances balances={balances}/>
      <MainHeader title={"History"} type={"h3"}>History</MainHeader>
      <EntryLines entries={entries} onDelete={onDeleteEntry} editEntry={editEntry}/>
      <MainHeader title={"Add new Tx"} type={"h3"}>History</MainHeader>
      <NewEntryForm onSubmit={onAddEntry}
                    label={label}
                    value={value}
                    isExpense={isExpense}
                    setValue={setValue}
                    setLabel={setLabel}
                    setIsExpense={setIsExpense}/>
      <ModalEdit isOpen={isOpen}
                 setIsOpen={closeModal}
                 label={label}
                 value={value}
                 isExpense={isExpense}
                 setValue={setValue}
                 setLabel={setLabel}
                 setIsExpense={setIsExpense}
      />

    </Container>
  );
}

export default App;
