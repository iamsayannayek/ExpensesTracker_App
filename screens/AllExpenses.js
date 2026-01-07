import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { normalizeExpenses } from "../util/expenses";

const AllExpenses = () => {
  // Get expenses array from redux store (slice shape: { expenses: [...] })
  const rawExpenses = useSelector((state) => state.expenses.expenses);
  const expenses = normalizeExpenses(rawExpenses);

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expenses}
        expensesPeriod="Total"
        fallbackText="No registered Expenses found!"
      />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
