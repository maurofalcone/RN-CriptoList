import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { COLOR_PALETTE } from "../../../helpers/Constants";

interface ErrorOverlayProps {
  message: string;
}

const ErrorOverlay: React.FC<ErrorOverlayProps> = ({ message }) => {
  return (
    <SafeAreaView style={styles.errorOverlay}>
      <Text>{message}</Text>
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
});

export default ErrorOverlay;
