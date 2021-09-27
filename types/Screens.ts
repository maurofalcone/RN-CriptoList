import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Wallet: undefined;
  List: undefined;
  Detail: undefined;
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
};

export type ListScreenRouteProps = {
  navigation: StackNavigationProp<RootStackParamList, "List">;
};

export type ToDoScreenRouteProps = {
  navigation: StackNavigationProp<RootStackParamList, "List">;
};
