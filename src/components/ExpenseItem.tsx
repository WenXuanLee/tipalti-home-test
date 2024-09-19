import React from 'react';
import { Expense } from '../schemas/expenseInterface';

interface ExpenseItemProps {
  expense: Expense;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  return (
    <tr>
      <td>{new Date(expense.date).toLocaleDateString()}</td>
      <td>{expense.merchant}</td>
      <td>£{expense.amount.toFixed(2)}</td>
      <td>{expense.category}</td>
      <td>{expense.description}</td>
      <td>{expense.status}</td>
    </tr>
  );
};

export default ExpenseItem;
