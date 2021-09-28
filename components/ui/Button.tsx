import React, { FC, ComponentProps } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { COLOR_PALETTE } from "../../helpers/Constants";

const Button: FC<ComponentProps<typeof TouchableOpacity> & { title: string }> =
  ({ children, title, disabled = false, ...rest }) => (
    <TouchableOpacity
      disabled={disabled}
      style={styles(disabled).wrapper}
      {...rest}
    >
      <View>
        <Text style={styles(disabled).text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

const styles = (isDisabled: boolean | null) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: COLOR_PALETTE.primary,
      height: 42,
      width: 343,
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
      opacity: isDisabled ? 0.5 : 1,
    },
    text: {
      color: COLOR_PALETTE.white,
      fontSize: 16,
      lineHeight: 24,
    },
  });

export default Button;
