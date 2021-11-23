import './ExpenseItem.css';
export default function ExpenseItem({expanse}) {
  return (
    <>
      {expanse.map(value => (
        <div className="expense-item" key={value.id}>
          <div>
						<div>{value.date.toLocaleString('en-US', {month: 'long'})}</div>
						<div>{value.date.getFullYear()}</div>
            <div>{value.date.toLocaleString('en-US', {day: '2-digit'})}</div>
          </div>
          <div className="expense-item__description">
            <h2>{value.title}</h2>
            <h2 className="expense-item__price">{value.amount}</h2>
          </div>
        </div>
      ))}
    </>
  );
}