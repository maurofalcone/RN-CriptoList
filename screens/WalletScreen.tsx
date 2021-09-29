import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { AuthContext } from "../context/AuthContext";
import { BottomTabParamList } from "../types/Screens";
import { COLOR_PALETTE } from "../helpers/Constants";
import { Card } from "../components/ui";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabButton = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <View
            key={index}
            style={{
              flex: 1,
              backgroundColor: COLOR_PALETTE.white,
              justifyContent: "space-around",
              flexDirection: "row",
              borderTopWidth: 1,
              borderTopColor: COLOR_PALETTE.darkGray,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                height: 90,
                borderTopWidth: 3,
                borderColor: isFocused ? COLOR_PALETTE.primary : "transparent",
                width: "70%",
              }}
            >
              <TouchableWithoutFeedback
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <Text
                  style={{
                    color: isFocused
                      ? COLOR_PALETTE.primary
                      : COLOR_PALETTE.secondary,
                    fontSize: 16,
                    fontWeight: "700",
                    paddingTop: 10,
                  }}
                >
                  {label}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        );
      })}
    </View>
  );
};
export default function WalletScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Account"
      tabBar={(props) => <TabButton {...props} />}
    >
      <Tab.Screen name="Account" component={AccountSection} />
      <Tab.Screen name="Partners" component={PartnersSection} />
    </Tab.Navigator>
  );
}

function AccountSection() {
  const context = useContext(AuthContext);
  const username = context?.loggedInUser || "-";
  return (
    <SafeAreaView style={accountStyles.container}>
      <Image
        style={accountStyles.illustration}
        source={require("../assets/finish-illustration.png")}
      />
      <Text style={accountStyles.title}>Hello, {username}</Text>
      <Text>Glad you are here, hope to see you soon.</Text>
    </SafeAreaView>
  );
}
const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.white,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    width: 256,
    height: 160,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
  },
});

function PartnersSection() {
  const partnerList = [
    {
      name: "App1",
      url: "#",
      comments: "Description of the application and what you did.",
    },
    {
      name: "App2",
      url: "#",
      comments: "Description of the application and what you did.",
    },
    {
      name: "App3",
      url: "#",
      comments: "Description of the application and what you did.",
    },
  ];

  const ListItem = ({ item }: any) => {
    return (
      <View style={{ margin: 5, height: 147 }}>
        <Card>
          <View
            style={{
              padding: 20,
              justifyContent: "space-around",
              height: "100%",
            }}
          >
            <View style={{ height: 20 }}>
              <Text
                style={{
                  color: COLOR_PALETTE.primary,
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                {item.name}
              </Text>
            </View>
            <View style={{ height: 40 }}>
              <Text>{item.comments}</Text>
            </View>
            <View style={{ flexDirection: "row", height: 20 }}>
              <Text>URL: </Text>
              <Text style={{ fontSize: 16, color: COLOR_PALETTE.lightGray }}>
                {item.url} item url
              </Text>
            </View>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Partners</Text>
      <Text style={styles.subtitle}>Here are some apps I was involved in:</Text>
      {partnerList && partnerList.length > 0 ? (
        <ScrollView>
          {partnerList.map((item) => (
            <ListItem key={item.name} item={item} />
          ))}
        </ScrollView>
      ) : (
        <Text>No Apps 🙈</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.grayBackground,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    margin: 24,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 24,
  },
  itemContainer: {
    display: "flex",
    backgroundColor: "#fff",
    marginVertical: 6,
    padding: 8,
  },
});
