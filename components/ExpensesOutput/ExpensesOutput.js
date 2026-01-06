import { View, Text, StyleSheet } from "react-native";

//Components
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

//Dummy Expenses
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "12 Bananas",
    amount: 20.57,
    date: new Date("2025-12-19"),
  },
  {
    id: "e2",
    description: "2 Sweaters",
    amount: 700,
    date: new Date("2025-12-25"),
  },
  {
    id: "e3",
    description: "Dada Boudi Briyani",
    amount: 257.32,
    date: new Date("2025-06-27"),
  },
  {
    id: "e4",
    description: "Phone recharge",
    amount: 799,
    date: new Date("2026-01-06"),
  },
  {
    id: "e5",
    description: "12 Bananas",
    amount: 20.57,
    date: new Date("2025-12-19"),
  },
  {
    id: "e6",
    description: "2 Sweaters",
    amount: 700,
    date: new Date("2025-12-25"),
  },
  {
    id: "e7",
    description: "Dada Boudi Briyani",
    amount: 257.32,
    date: new Date("2025-06-27"),
  },
  {
    id: "e8",
    description: "Phone recharge",
    amount: 799,
    date: new Date("2026-01-06"),
  },
  {
    id: "e9",
    description: "Phone recharge",
    amount: 799,
    date: new Date("2026-01-06"),
  },
  {
    id: "e10",
    description: "Phone recharge",
    amount: 799,
    date: new Date("2026-01-06"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: "#FFFDE1",
  },
});
