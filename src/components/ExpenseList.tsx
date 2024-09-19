// ExpenseList.tsx
import ExpenseItem from './ExpenseItem';
import '../styles/expenseList.css';
import { useFetchExpenses } from '../hooks/useFetchExpenses';

const TABLE_HEADER_ROW = [
  'Date',
  'Merchant',
  'Amount',
  'Category',
  'Description',
  'Status',
]

const ExpenseList = () => {
  const { loading, error, expenses } = useFetchExpenses();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="expense-table-container">
      <h1 className="expense-table-title">Expenses</h1>
      {error && (
        <h6 className="error-hint">{error}</h6>
      )}
      <table className="expense-table">
        <thead>
          <tr>
            {TABLE_HEADER_ROW.map((rowName: string) => (
              <th>{rowName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
