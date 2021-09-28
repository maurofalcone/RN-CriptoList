import React from "react";
import { useForm, NestedValue, Control } from "react-hook-form";
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
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    // move to list
    navigation.navigate("List");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text></Text>
      <View style={styles.inputsContainer}>
        <TextField
          name="name"
          placeholder="Enter your name"
          control={control}
        />
        <TextField
          name="password"
          placeholder="Enter your passowrd"
          control={control}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign in" onPress={handleSubmit(onSubmit)}>
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
