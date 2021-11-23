import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
export default function ExpenseItem({expense}) {
  return (
    <>
      {expense.map(value => (
        <Card className="expense-item" key={value.id}>
          <ExpenseDate date={value.date}/>
          <div className="expense-item__description">
            <h2>{value.title}</h2>
            <h2 className="expense-item__price">{value.amount}</h2>
          </div>
        </Card>
      ))}
    </>
  );
}