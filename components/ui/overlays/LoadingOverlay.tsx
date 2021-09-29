import React, { ComponentProps } from "react";
import { SafeAreaView, ActivityIndicator, StyleSheet } from "react-native";
import { COLOR_PALETTE } from "../../../helpers/Constants";

const LoadingOverlay: React.FC<ComponentProps<typeof ActivityIndicator>> = ({
  color = COLOR_PALETTE.primary,
  size = "large",
  ...rest
}) => {
  return (
    <SafeAreaView style={styles.loadingOverlay}>
      <ActivityIndicator color={color} size={size} {...rest} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingOverlay: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoadingOverlay;
