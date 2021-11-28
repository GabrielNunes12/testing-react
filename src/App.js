import Card from './components/Card/Card';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import './Expenses.css';
import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';
import {useState} from 'react';

const DUMMY_EXPENSES = [];
function App() {
  const [filteredYear, setFilteredYear] = useState('2020');

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onSaveExpense = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    });
  }

  const onGetYear = (year) => {
    setFilteredYear(year);
  }

  return (
    <>
      <NewExpense onSaveExpense={onSaveExpense}/>
      <Card className="expenses">
        <div>
          <ExpenseFilter selected={filteredYear} onGetYear={onGetYear} />
        </div>
        <ExpenseItem expense={expenses}/>
      </Card>
    </>
  );
}

export default App;
