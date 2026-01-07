import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getdateMinusdays } from "../util/date";
import { normalizeExpenses } from "../util/expenses";

const RecentExpenses = () => {
  // Get expenses array from redux store (slice shape: { expenses: [...] })
  const rawExpenses = useSelector((state) => state.expenses.expenses);
  const expenses = normalizeExpenses(rawExpenses);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getdateMinusdays(today, 7);

    return expense.date && expense.date > date7DaysAgo;
  });

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Last 7 Days"
        fallbackText="No Expenses Registered for the Last 7 Days."
      />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
