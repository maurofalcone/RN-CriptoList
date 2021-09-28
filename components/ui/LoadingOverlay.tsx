import * as React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { COLOR_PALETTE } from "../../helpers/Constants";

const LoadingOverlay = () => {
  return (
    <View style={styles.loadingOverlay}>
      <ActivityIndicator color={COLOR_PALETTE.primary} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingOverlay: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoadingOverlay;
