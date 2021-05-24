import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>
{
   const [titleEntered,setTitleEntered]=useState('');
    const [dateEntered,setDateEntered]=useState('');
    const [amountEntered,setAmountEntered]=useState('');
    const titleChangeHandler=(event)=>{
        setTitleEntered(event.target.value);
    
    }
    const dateChangeHandler=(event)=>{
        setDateEntered(event.target.value);
        console.log(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setAmountEntered(event.target.value);
        console.log(event.target.value);
    }
    const submitHandler=(event)=>
    {
        event.preventDefault();
        const expenseData={
            title:titleEntered,
            amount:amountEntered,
            date:dateEntered
        }
        props.onSaveExspenses(expenseData);
        setTitleEntered('');
        setDateEntered('');
        setAmountEntered('');
    }
   
return(
  <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
     <div className="new-expense__control" >
         <label>Title</label>
         <input type='text' onChange={titleChangeHandler} value={titleEntered} />
     </div>
     <div className='new-expense__control' >
         <label>Amount</label>
         <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={amountEntered}></input>
     </div>
     <div className='new-expense__control'>
         <label>Date</label>
         <input type='date' min="2000-01-01" max="2021-05-20" onChange={dateChangeHandler} value={dateEntered}></input>
     </div>
     <div className='new-expense__control'>
         <button type="submit" className="new-expense__actions" >Add Exspense</button>
     </div>
</div>
</form>);
};

export default ExpenseForm;