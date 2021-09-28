import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ToDoScreen from "./screens/ToDoScreen";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import WalletScreen from "./screens/WalletScreen";
import { Logo } from "./components/ui";
import AuthContextProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

/**
 * Use `HomeScreen` as the initial route
 * Replace the screen title with the `Logo` component
 *
 * 💯  Usage of TypeScript is a plus
 */

const Stack = createStackNavigator();
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="ToDo" component={ToDoScreen} />
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Wallet" component={WalletScreen} />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerTitle: Logo }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
