import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Wallet: undefined;
  List: undefined;
  Detail: {
    id: string;
  };
  ToDo: undefined;
};

export type HomeScreenRouteProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export type WalletScreenRouteProps = {
  navigation: StackNavigationProp<RootStackParamList, "Wallet">;
};

export type DetailScreenRouteProps = {
  navigation: StackNavigationProp<RootStackParamList, "Detail">;
  route: RouteProp<RootStackParamList, "Detail">;
};

export type ListScreenRouteProps = {
  navigation: StackNavigationProp<RootStackParamList, "List">;
};

export type ToDoScreenRouteProps = {
  navigation: StackNavigationProp<RootStackParamList, "ToDo">;
};

export type BottomTabParamList = {
  Account: undefined;
  Partners: undefined;
};
