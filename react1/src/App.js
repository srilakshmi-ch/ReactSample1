import logo from "./logo.svg";
import React,{useState} from 'react';
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
const DummyExpenses = [
  { id:1,title: "Spent on books", amount: 250, date:new Date(2021,2,12) },
  { id:2,title: "Car Insurance", amount: 300, date:new Date(2021,3,15) },
  { id:3,title: "Car Washing", amount: 100, date:new Date(2021,5,23) },
];
function App() {
const [expenses,setExpenses]=useState(DummyExpenses);
  const newExspenseHandler=(expense)=>
  {
    expense.date=new Date(expense.date);
    console.log(expense.title);
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  }
  return (
   
    <div>
      <h1>hello</h1>
      <NewExpense onNewExspense={newExspenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
