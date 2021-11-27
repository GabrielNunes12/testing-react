import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = ({onSaveExpenseData}) => {
  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ year, setYear ] = useState('');
  
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  }

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(year)
    };
    onSaveExpenseData(expenseData);
    setTitle('');
    setYear('');
    setAmount('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={title} type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={amount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={year} type="date" min="2019-01-01" max="2022-12-31" onChange={yearChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions"> 
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  )
}

export default ExpenseForm;