import React from "react";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack/lib/typescript/src/types";
import { GoBack } from "../icons";
import { COLOR_PALETTE } from "../../helpers/Constants";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const NavigatorHeader: React.FC<StackHeaderLeftButtonProps> = ({
  onPress,
  label,
  ...rest
}) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress} {...rest}>
      <GoBack />
      {label && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  text: {
    fontWeight: "400",
    fontSize: 14,
    color: COLOR_PALETTE.primary,
  },
});

export default NavigatorHeader;
