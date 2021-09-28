import React, { FC, ComponentProps } from "react";
import { StyleSheet, TouchableHighlight, View, Text } from "react-native";

const Button: FC<
  ComponentProps<typeof TouchableHighlight> & { title: string }
> = ({ children, title, ...rest }) => (
  <TouchableHighlight style={styles.wrapper} {...rest}>
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#1FC4DB",
    height: 42,
    width: 343,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Button;
