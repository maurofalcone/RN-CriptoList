import React, { useCallback, useContext, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { TextField, Button } from "../components/ui";
import { AuthContext } from "../context/AuthContext";
import { HomeScreenRouteProps } from "../types/Screens";
import { IAuthContext } from "../types/Context";
import { IUser } from "../types/User";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { COLOR_PALETTE } from "../helpers/Constants";
/* 
  Implement form using any user/pass combination 
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Name is required")
    .matches(
      /^[a-zA-Z]+$/,
      "Name must not contain special characters or numbers"
    ),
  password: Yup.string().required("Password is required"),
});
const formOptions = {
  resolver: yupResolver(validationSchema),
  mode: "onSubmit",
  reValidateMode: "onChange",
  defaultValues: {},
  context: undefined,
  criteriaMode: "firstError",
  shouldFocusError: true,
  shouldUnregister: false,
  shouldUseNativeValidation: false,
  delayError: undefined,
};

const HomeScreen: React.FC<HomeScreenRouteProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<IUser>(formOptions as any);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [genericError, setGenericError] = useState<string>("");
  const authContext = useContext(AuthContext) as IAuthContext;
  const watchUsername = useWatch({ control, name: "username" });
  const watchPassword = useWatch({ control, name: "password" });
  const onSubmit = async (data: IUser) => {
    try {
      setGenericError("");
      toggleLoading();
      const { saveLoggedInUser } = authContext;
      if (
        data.username.toUpperCase() === "MAURO" &&
        data.password.toUpperCase() === "TRUENORTH"
      ) {
        await saveLoggedInUser({
          username: data.username,
          password: data.password,
        });
        toggleLoading();
        navigation.navigate("List");
      } else {
        throw new Error("Invalid Credentials");
      }
    } catch (error: any) {
      toggleLoading();
      setGenericError(() => error.message);
    }
  };

  const toggleLoading = useCallback(() => {
    setLoading((prevLoadingState) => !prevLoadingState);
  }, [isLoading]);

  const isSubmitDisabled = () => {
    const shouldDisable =
      !watchUsername || !watchPassword || isLoading || !isDirty;
    return shouldDisable;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text></Text>
      <View style={styles.inputsContainer}>
        <TextField
          name="username"
          placeholder="Enter your name"
          control={control}
        />
        <TextField
          name="password"
          placeholder="Enter your passowrd"
          control={control}
          autoCapitalize="none"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.errorText}>{genericError}</Text>
        <Button
          title={!isLoading ? "Sign In" : "Loading"}
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitDisabled()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.white,
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
    height: 150,
    justifyContent: "space-around",
  },
  buttonContainer: {
    paddingVertical: 30,
  },
  errorText: {
    color: COLOR_PALETTE.error,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default HomeScreen;
