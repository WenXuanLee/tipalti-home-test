// ExpenseList.tsx
import React from 'react';
import ExpenseItem from './ExpenseItem';
import { Expense } from '../schemas/expenseInterface';

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="expense-table-container">
      <h1>Expenses</h1>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Merchant</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Status</th>
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
