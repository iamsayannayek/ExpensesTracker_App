import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="Total" />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
