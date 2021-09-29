import React, { FC, ComponentProps } from "react";
import { Control, useController } from "react-hook-form";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { COLOR_PALETTE } from "../../../helpers/Constants";
import { ErrorIcon } from "../../icons";

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
    fieldState: { error },
  } = useController({ control, defaultValue: "", name });
  const hasError = error && error.message;
  return (
    <View style={styles().wrapper}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <TextInput
          style={styles(hasError).inputContainer}
          onChangeText={field.onChange}
          value={field.value}
          placeholder={placeholder}
          placeholderTextColor={COLOR_PALETTE.lightGray}
          {...rest}
        />
        {hasError && (
          <ErrorIcon style={{ position: "absolute", right: 5, top: 1 }} />
        )}
      </View>
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
      borderColor: hasError ? COLOR_PALETTE.error : COLOR_PALETTE.darkGray,
      borderWidth: 1,
      paddingVertical: 9,
      paddingHorizontal: 13,
    },
    error: {
      color: COLOR_PALETTE.error,
      paddingTop: 5,
      paddingLeft: 5,
      fontSize: 13,
    },
  });

export default TextField;
