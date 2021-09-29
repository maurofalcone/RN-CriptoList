import * as React from "react";
import { Image } from "react-native";

const Logo = () => {
  return (
    <Image
      style={{ width: 26, height: 28, resizeMode: "contain" }}
      source={require("../../assets/logo.png")}
    />
  );
};

export default Logo;
