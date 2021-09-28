import React, { FC, ComponentProps } from "react";
import { Control, useController } from "react-hook-form";
import { TextInput, StyleSheet } from "react-native";

interface TextFieldProps
  extends Omit<ComponentProps<typeof TextInput>, "onChangeText"> {
  name: string;
  control: Control;
}

const TextField: FC<TextFieldProps> = ({
  placeholder,
  value,
  name,
  control,
  ...rest
}) => {
  const { field } = useController({ control, defaultValue: "", name });
  return (
    <TextInput
      style={styles.container}
      onChangeText={field.onChange}
      value={field.value}
      placeholder={placeholder}
      placeholderTextColor="#6B7280"
      {...rest}
    />
  );
};

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
