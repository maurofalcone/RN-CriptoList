import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ToDoScreen from "./screens/ToDoScreen";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import WalletScreen from "./screens/WalletScreen";
import { Logo, HeaderGoBackButton } from "./components/icons";
import AuthContextProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ROUTES } from "./helpers/Constants";

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
          <Stack.Navigator initialRouteName={ROUTES.Home}>
            <Stack.Screen
              name={ROUTES.ToDo}
              component={ToDoScreen}
              options={{
                headerLeft: HeaderGoBackButton,
              }}
            />
            <Stack.Screen
              name={ROUTES.List}
              component={ListScreen}
              options={{
                headerLeft: HeaderGoBackButton,
              }}
            />
            <Stack.Screen
              name={ROUTES.Detail}
              component={DetailScreen}
              options={{
                headerLeft: HeaderGoBackButton,
              }}
            />
            <Stack.Screen
              name={ROUTES.Wallet}
              component={WalletScreen}
              options={{
                headerLeft: HeaderGoBackButton,
              }}
            />
            <Stack.Screen
              name={ROUTES.Home}
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
