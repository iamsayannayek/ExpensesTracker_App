import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // store dates as ISO strings to keep state serializable
  expenses: [
    {
      id: nanoid(),
      description: "12 Bananas",
      amount: 20.57,
      date: "2026-01-05T00:00:00.000Z",
    },
    {
      id: nanoid(),
      description: "2 Sweaters",
      amount: 700,
      date: "2025-12-25T00:00:00.000Z",
    },
    {
      id: nanoid(),
      description: "Dada Boudi Briyani",
      amount: 257.32,
      date: "2025-06-27T00:00:00.000Z",
    },
    {
      id: nanoid(),
      description: "Phone recharge",
      amount: 799,
      date: "2026-01-06T00:00:00.000Z",
    },
    {
      id: nanoid(),
      description: "12 Bananas",
      amount: 20.57,
      date: "2025-12-19T00:00:00.000Z",
    },
    {
      id: nanoid(),
      description: "2 Sweaters",
      amount: 700,
      date: "2025-12-25T00:00:00.000Z",
    },
    {
      id: nanoid(),
      description: "Dada Boudi Briyani",
      amount: 257.32,
      date: "2025-06-27T00:00:00.000Z",
    },
    {
      id: nanoid(),
      description: "Phone recharge",
      amount: 799,
      date: "2026-01-06T00:00:00.000Z",
    },
    {
      id: nanoid(),
      description: "Phone recharge",
      amount: 799,
      date: "2026-01-06T00:00:00.000Z",
    },
    {
      id: nanoid(),
      description: "Phone recharge",
      amount: 799,
      date: "2026-01-06T00:00:00.000Z",
    },
  ],
};

export const expensesSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const newExpense = {
        id: nanoid(),
        description: action.payload.description,
        amount: action.payload.amount,
        date:
          action.payload.date instanceof Date
            ? action.payload.date.toISOString()
            : action.payload.date,
      };
      state.expenses.push(newExpense);
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
    updateExpense: (state, action) => {
      // Support two payload shapes:
      // 1) { id, description, amount, date }
      // 2) { id, expense: { description, amount, date } }
      const { id } = action.payload;
      let description, amount, date;
      if (action.payload.expense) {
        ({ description, amount, date } = action.payload.expense);
      } else {
        ({ description, amount, date } = action.payload);
      }

      const existingExpense = state.expenses.find(
        (expense) => expense.id === id
      );
      if (existingExpense) {
        if (description !== undefined)
          existingExpense.description = description;
        if (amount !== undefined) existingExpense.amount = amount;
        if (date !== undefined)
          existingExpense.date =
            date instanceof Date ? date.toISOString() : date;
      }
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
