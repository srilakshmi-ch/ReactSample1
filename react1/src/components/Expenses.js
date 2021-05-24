import React,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
function Expenses(props)
{
    const [selectedYear,setSelectedYear]=useState('2021');
    const saveYearHandler=(year)=>
    {
       setSelectedYear(year);
    
    }
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
      });
      let contentExpenses=<p className="noexpense">No Expenses</p>
       if(filteredExpenses.length>0)
       {
           contentExpenses=filteredExpenses.map(expense => 
            <ExpenseItem 
                 key={expense.id}
                 title={expense.title} 
                 amount={expense.amount} 
                 date={expense.date}/>
         );
       }
      return (
        <Card className="expenses">
            <ExpensesFilter onSaveYear={saveYearHandler} year={selectedYear}></ExpensesFilter>
           {contentExpenses}
            {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
       */}
        </Card>
    );

}

export default Expenses;