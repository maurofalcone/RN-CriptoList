import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import GreenArrowUp from "./GreenArrowUp";
import RedArrowDown from "./RedArrowDown";

type PercentProps = {
  value: string;
  positive: boolean | null;
};

const Percent: FC<PercentProps> = ({ value, positive }) => (
  <View style={styles(positive).wrapper}>
    {positive ? <GreenArrowUp /> : <RedArrowDown />}
    <Text style={styles(positive).value}>$ {value}</Text>
  </View>
);

const styles = (positive: boolean | null) =>
  StyleSheet.create({
    wrapper: {
      borderRadius: 12,
      backgroundColor: positive ? "#D1FAE5" : "#FDDCDC",
      height: 24,
      width: 73,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    value: {
      color: positive ? "#065F46" : "#A50606",
      marginLeft: 5,
    },
  });

export default Percent;
