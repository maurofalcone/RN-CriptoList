import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { COLOR_PALETTE } from "../../../helpers/Constants";

interface ErrorOverlayProps {
  message: string;
}

const mapError = (err: string) => {
  if (err === "Network Error") {
    return "Please check your internet connection.";
  }
  return err;
};

const ErrorOverlay: React.FC<ErrorOverlayProps> = ({ message }) => {
  return (
    <SafeAreaView style={styles.errorOverlay}>
      <Text style={styles.errorAdvice}>Oops! Something went wrong :(</Text>
      <Text>{mapError(message)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR_PALETTE.grayBackground,
  },
  errorAdvice: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 15,
  },
});

export default ErrorOverlay;
