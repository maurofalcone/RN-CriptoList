import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

/* 
  Implement form using any user/pass combination 
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/

const HomeScreen: React.FC<HomeScreenRouteProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text></Text>
      <TextInput style={{ height: 40 }} placeholder="Enter your name" />
      <TextInput style={{ height: 40 }} placeholder="Enter your passowrd" />
      <Button title="Sign in" onPress={() => alert("List")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
});

export default HomeScreen;

// type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
