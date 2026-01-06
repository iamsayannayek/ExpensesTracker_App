import { View, Text } from "react-native";
import React from "react";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce(
    (sum, currExpense) => sum + currExpense.amount,
    0
  );
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>Rs.{expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
