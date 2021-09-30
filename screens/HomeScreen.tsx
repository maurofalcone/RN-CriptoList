import React, { useCallback, useContext, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextField, Button } from "../components/ui";
import { AuthContext } from "../context/AuthContext";
import { HomeScreenRouteProps } from "../types/Screens";
import { IAuthContext } from "../types/Context";
import { IUser } from "../types/User";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { COLOR_PALETTE, ROUTES } from "../helpers/Constants";
import { Platform } from "react-native";

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
  criteriaMode: "firstError",
  shouldFocusError: true,
};

const HomeScreen: React.FC<HomeScreenRouteProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useForm<IUser>(formOptions as any);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [genericError, setGenericError] = useState<string>("");
  const authContext = useContext(AuthContext) as IAuthContext;
  const watchUsername = useWatch({ control, name: "username" });
  const watchPassword = useWatch({ control, name: "password" });

  const onSubmit = async (data: IUser) => {
    try {
      toggleLoading();
      const { login } = authContext;
      const response = await login({
        username: data.username,
        password: data.password,
      });
      if (response) {
        toggleLoading();
        navigation.navigate(ROUTES.List);
        clearForm();
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

  const clearForm = () => {
    setGenericError("");
    reset();
  };

  const isSubmitDisabled = () => {
    const shouldDisable =
      !watchUsername || !watchPassword || isLoading || !isDirty;
    return shouldDisable;
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable onPress={Keyboard.dismiss}>
          <Text style={styles.title}>Welcome</Text>
          <Text></Text>
          <View style={styles.inputsContainer}>
            <TextField
              name="username"
              accessible
              accessibilityLabel="Username Input"
              placeholder="Enter your name"
              control={control}
              testID={"usernameTextFieldId"}
            />
            <TextField
              accessible
              accessibilityLabel="Password Input"
              name="password"
              placeholder="Enter your passowrd"
              control={control}
              autoCapitalize="none"
              secureTextEntry
              testID={"passwordTextFieldId"}
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Text testID="genericErrorId" style={styles.errorText}>
              {genericError}
            </Text>
            <Button
              accessible
              accessibilityState={{
                disabled: isSubmitDisabled(),
              }}
              accessibilityHint="After you tapping on this login button. Your username and password will be validated and on successfull login you will be taken to the dashboard screen"
              accessibilityLabel="Sign In"
              isLoading={isLoading}
              title="Sign In"
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitDisabled()}
              testID="submitId"
            />
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.white,
    alignItems: "center",
    justifyContent: "center",
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
    height: 20,
  },
});

export default HomeScreen;
