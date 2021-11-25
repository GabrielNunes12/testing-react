import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import { useState } from 'react';
import Card from '../Card/Card';

export const ExpenseItem = ({expense}) => {
  
  const [title, setTitle] = useState('');

  function clickHandler() {
    setTitle('Book');
  }

  return (
    <>
      {expense.map(value => (
        <Card className="expense-item" key={value.id}>
          <ExpenseDate date={value.date}/>
          <div className="expense-item__description">
            <h2>{!title ? value.title : title}</h2>
            <h2 className="expense-item__price">{value.amount}</h2>
          </div>
          <button onClick={clickHandler}>Change title</button>
        </Card>
      ))}
    </>
  );
}

export default ExpenseItem;