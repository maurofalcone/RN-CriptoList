import React, { FC, ComponentProps } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

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
      backgroundColor: "#1FC4DB",
      height: 42,
      width: 343,
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
      opacity: isDisabled ? 0.5 : 1,
    },
    text: {
      color: "#FFF",
      fontSize: 16,
      lineHeight: 24,
    },
  });

export default Button;
