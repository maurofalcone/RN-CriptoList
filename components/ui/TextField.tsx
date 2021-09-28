import React, { FC, ComponentProps } from "react";
import { TextInput, StyleSheet } from "react-native";

const TextField: FC<ComponentProps<typeof TextInput>> = ({
  onChangeText,
  placeholder,
  value,
  ...rest
}) => (
  <TextInput
    style={styles.container}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    placeholderTextColor="#6B7280"
    {...rest}
  />
);

const styles = StyleSheet.create({
  container: {
    height: 42,
    width: 353,
    borderRadius: 6,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    paddingVertical: 9,
    paddingHorizontal: 13,
  },
});

export default TextField;
