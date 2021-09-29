import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../../types/Screens";
import PartnersSection from "./PartnersSection";
import AccountSection from "./AccountSection";
import { NavigatorTabButton } from "../../components/ui";

const Tab = createBottomTabNavigator<BottomTabParamList>();
const WalletScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Account"
      tabBar={(props) => <NavigatorTabButton {...props} />}
    >
      <Tab.Screen name="Account" component={AccountSection} />
      <Tab.Screen name="Partners" component={PartnersSection} />
    </Tab.Navigator>
  );
};

export default WalletScreen;
