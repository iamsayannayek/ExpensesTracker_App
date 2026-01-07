export function normalizeExpenses(expenses = []) {
  return (expenses || []).map((e) => ({
    ...e,
    date:
      e.date instanceof Date
        ? e.date
        : typeof e.date === "string" && e.date
        ? new Date(e.date)
        : null,
    amount: typeof e.amount === "number" ? e.amount : Number(e.amount),
  }));
}
