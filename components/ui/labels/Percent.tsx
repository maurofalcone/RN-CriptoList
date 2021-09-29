import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import GreenArrowUp from "../../icons/GreenArrowUp";
import RedArrowDown from "../../icons/RedArrowDown";
import currency from "currency.js";
import { COLOR_PALETTE } from "../../../helpers/Constants";

type PercentProps = {
  value: string;
  isPositive: boolean | null;
};

const Percent: FC<PercentProps> = ({ value, isPositive }) => (
  <View style={styles(isPositive).wrapper}>
    {isPositive ? <GreenArrowUp /> : <RedArrowDown />}
    <Text style={styles(isPositive).value}>
      {`${currency(value, { symbol: "" }).format()} %`}
    </Text>
  </View>
);

const styles = (isPositive: boolean | null) =>
  StyleSheet.create({
    wrapper: {
      borderRadius: 12,
      backgroundColor: isPositive
        ? COLOR_PALETTE.bidFaded
        : COLOR_PALETTE.askFaded,
      height: 24,
      width: 73,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    value: {
      color: isPositive ? COLOR_PALETTE.bid : COLOR_PALETTE.ask,
      marginLeft: 5,
    },
  });

export default Percent;
