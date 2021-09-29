import React, { ComponentProps } from "react";
import { SvgCss } from "react-native-svg";
import { View, ViewStyle } from "react-native";

const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="32" style="overflow:visible;enable-background:new 0 0 32 32" viewBox="0 0 32 32" width="32" xml:space="preserve"><g><g id="Error_1_"><g id="Error"><circle cx="16" cy="16" id="BG" r="16" style="fill:#D72828;"/><path d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z" id="Exclamatory_x5F_Sign" style="fill:#E6E6E6;"/></g></g></g></svg>`;

interface ErrorIconProps extends ComponentProps<typeof View> {
  style?: ViewStyle;
}

const ErrorIcon: React.FC<ErrorIconProps> = ({ style, ...rest }) => {
  return (
    <View style={{ padding: 7, ...style }} {...rest}>
      <SvgCss xml={xml} width={20} height={20} />
    </View>
  );
};

export default ErrorIcon;
