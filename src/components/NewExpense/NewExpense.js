import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onSaveExpense}) => {
  const onSaveExpenseData = (expenseDate) => {
    const data = {...expenseDate, id: Math.random().toString()};
    onSaveExpense(data);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
    </div>
  )
}

export default NewExpense;