import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ToDoScreen from "./screens/ToDoScreen";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import WalletScreen from "./screens/wallet/WalletScreen";
import { Logo } from "./components/icons";
import AuthContextProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ROUTES } from "./helpers/Constants";
import { NavigatorHeader } from "./components/ui";

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
                headerLeft: NavigatorHeader,
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name={ROUTES.List}
              component={ListScreen}
              options={{
                headerLeft: NavigatorHeader,
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name={ROUTES.Detail}
              component={DetailScreen}
              options={{
                headerLeft: NavigatorHeader,
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name={ROUTES.Wallet}
              component={WalletScreen}
              options={{
                headerLeft: NavigatorHeader,
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name={ROUTES.Home}
              component={HomeScreen}
              options={{ headerTitle: Logo, headerTitleAlign: "center" }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
