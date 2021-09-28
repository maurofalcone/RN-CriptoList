import React, { FC, ComponentProps } from "react";
import { Control, useController } from "react-hook-form";
import { TextInput, StyleSheet, View, Text } from "react-native";

interface TextFieldProps
  extends Omit<ComponentProps<typeof TextInput>, "onChangeText"> {
  name: string;
  control: Control<any>;
}

const TextField: FC<TextFieldProps> = ({
  placeholder,
  value,
  name,
  control,
  ...rest
}) => {
  const {
    field,
    fieldState: { error, isDirty },
  } = useController({ control, defaultValue: "", name });
  const hasError = error && error.message;
  return (
    <View style={styles().wrapper}>
      <TextInput
        style={styles(hasError).inputContainer}
        onChangeText={field.onChange}
        value={field.value}
        placeholder={placeholder}
        placeholderTextColor="#6B7280"
        {...rest}
      />
      {hasError && <Text style={styles().error}>{error.message}</Text>}
    </View>
  );
};

const styles = (hasError?: boolean) =>
  StyleSheet.create({
    wrapper: {
      height: 72,
    },
    inputContainer: {
      width: 353,
      borderRadius: 6,
      borderColor: hasError ? "#FF0000" : "#D1D5DB",
      borderWidth: 1,
      paddingVertical: 9,
      paddingHorizontal: 13,
    },
    error: {
      color: "#FF0000",
      paddingTop: 5,
      paddingLeft: 5,
      fontSize: 13,
    },
  });

export default TextField;
