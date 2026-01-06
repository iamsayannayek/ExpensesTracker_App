import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Screens
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview() {
  const insets = useSafeAreaInsets();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "#132440",

        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 6,
          borderTopWidth: 0,
        },

        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "700",
          marginTop: 8,
        },

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#6b6b6cff",
      }}
    >
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#132440" : "transparent",
                width: 36,
                height: 36,
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="hourglass"
                size={22}
                color={focused ? "#fff" : color}
              />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#132440" : "transparent",
                width: 36,
                height: 36,
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="calendar"
                size={22}
                color={focused ? "#fff" : color}
              />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
