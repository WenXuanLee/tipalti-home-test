import { useState, useEffect } from 'react';
import { Expense } from '../schemas/expenseInterface';
import { MOCK_EXPENSES_DATA } from '../constants/mockExpenseData';

interface UseFetchExpensesOutput {
  loading: boolean;
  error: string | null;
  expenses: Expense[];
}

const REQUEST_URL = "https://expenses-backend-mu.vercel.app/expenses";
const HEADERS = {
  "Content-Type": "application/json",
  Username: "wenxuan.lee"  // Make sure to replace with your actual username
}

export const useFetchExpenses = (): UseFetchExpensesOutput => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(REQUEST_URL, {
          headers: HEADERS,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setExpenses(data);
      } catch (error: unknown) {
        setExpenses(MOCK_EXPENSES_DATA);
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, expenses };
};
