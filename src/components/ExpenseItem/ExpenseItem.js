import './ExpenseItem.css';
export default function ExpenseItem({expanse}) {
  return (
    <>
      {expanse.map(value => (
        <div className="expense-item" key={value.id}>
          <div>
            {value.date.toGMTString()}
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
