import Card from './components/Card/Card';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import './Expenses.css';

function App() {
  const expenses = [];

  const onSaveExpense = (expense) => {
    const newExpense = {
      id: expense.id,
      title: expense.title,
      amount: expense.amount,
      date: new Date(expense.date),
    }
    expenses.push(newExpense);
  }
  return (
    <>
      <NewExpense onSaveExpense={onSaveExpense}/>
      <Card className="expenses">
        <ExpenseItem expense={expenses}/>
      </Card>
    </>
  );
}

export default App;
