import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { COLOR_PALETTE } from "../../helpers/Constants";

const Card: React.FC = ({ children }) => (
  <View style={styles.mainWrapper}>{children}</View>
);

const styles = StyleSheet.create({
  mainWrapper: {
    borderRadius: 8,
    backgroundColor: COLOR_PALETTE.white,
    ...Platform.select({
      ios: {
        shadowColor: COLOR_PALETTE.black,
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
          width: 1,
          height: 1,
        },
      },
      android: {
        elevation: 1,
      },
    }),
  },
});

export default Card;
