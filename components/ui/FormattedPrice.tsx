import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLOR_PALETTE } from "../../helpers/Constants";

type PercentProps = {
  value: string;
  currency: string;
};

const FormattedPrice: FC<PercentProps> = ({ currency, value }) => (
  <View style={styles.container}>
    <Text style={styles.price}>{value}</Text>
    <Text style={styles.currency}>{currency}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  currency: {
    fontSize: 14,
    color: COLOR_PALETTE.lightGray,
    marginTop: 8,
    marginLeft: 5,
  },
  price: {
    marginTop: 2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: 24,
    color: COLOR_PALETTE.primary,
  },
});

export default FormattedPrice;
