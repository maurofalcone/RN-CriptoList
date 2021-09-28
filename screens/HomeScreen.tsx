import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextField, Button } from "../components/ui";
import { HomeScreenRouteProps } from "../types/Screens";
/* 
  Implement form using any user/pass combination 
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/

const HomeScreen: React.FC<HomeScreenRouteProps> = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text></Text>
      <View style={styles.inputsContainer}>
        <TextField placeholder="Enter your name" />
        <TextField placeholder="Enter your passowrd" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign in" onPress={() => alert("List")}>
          Sign in
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 124,
    height: 217,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
  inputsContainer: {
    height: 130,
    justifyContent: "space-around",
  },
  buttonContainer: {
    paddingVertical: 30,
  },
});

export default HomeScreen;

// type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
