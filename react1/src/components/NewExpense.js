import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
const NewExpense=(props)=>{
    const saveHandler=(EnteredexpenseData)=>
    {
       const exspenseData={
           ...EnteredexpenseData,
           id: Math.random().toString()
       }
       props.onNewExspense(exspenseData);
    }
    return (
      <div className="new-expense">
         <ExpenseForm onSaveExspenses={saveHandler}></ExpenseForm>
      </div>
    );

};

export default NewExpense;