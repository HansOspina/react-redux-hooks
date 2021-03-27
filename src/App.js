import './App.css';

import {useState} from 'react';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import EntryLines from "./components/EntryLines";

function App() {

  const [balances, setBalances] = useState([
    {label:"Income:", value:"12000.00", color:"green"},
    {label:"Expenses:", value:"1100.00", color:"red"}
  ]);

  const [entries, setEntries] = useState([
    {id:"1", label:"Income:", value:"1200.00", isExpense:true},
    {id:"2", label:"Expenses:", value:"110.00", isExpense:true},
    {id:"3", label:"Expenses:", value:"50.00", isExpense:false},
  ]);



  function onAddEntry(entry){
    entry.id = entries.length +1;
    setEntries(entries => entries.concat(entry));
  }

  function onDeleteEntry(entryId){
    setEntries(entries => entries.filter(val=> val.id!==entryId));
  }


  return (
    <Container>
      <MainHeader title={"Budget"} type={"h1"}/>
      <DisplayBalance label={"yourBalance:"} value={"10,200.00"} size={"small"}/>
      <DisplayBalances balances={balances}/>
      <MainHeader title={"History"} type={"h3"}>History</MainHeader>
      <EntryLines entries={entries} onDelete={onDeleteEntry}/>
      <MainHeader title={"Add new Tx"} type={"h3"}>History</MainHeader>
      <NewEntryForm onSubmit={onAddEntry}/>


    </Container>
  );
}

export default App;
