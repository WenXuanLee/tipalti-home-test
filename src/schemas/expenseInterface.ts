// Interfaces.ts
export interface Expense {
  id: number;
  merchant: string;
  amount: number;
  description: string;
  date: string; // This can be formatted as Date if needed
  category: string;
  status: string;
}
