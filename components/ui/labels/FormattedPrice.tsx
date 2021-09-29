import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLOR_PALETTE } from "../../../helpers/Constants";
import currency from "currency.js";

type PercentProps = {
  value: string;
  currencySymbol: string;
  size?: "small" | "large";
  color?: string;
};

const FormattedPrice: FC<PercentProps> = (props) => {
  const { currencySymbol, value } = props;
  const computedPrice = React.useMemo(
    () =>
      `$ ${currency(value, {
        separator: ",",
        symbol: "",
      }).format()}`,
    [value]
  );
  return (
    <View style={styles(props).container}>
      <Text style={styles(props).price}>{computedPrice}</Text>
      <Text style={styles(props).currency}>{currencySymbol}</Text>
    </View>
  );
};

const styles = (props: PercentProps) =>
  StyleSheet.create({
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
      fontWeight: props.size === "small" ? "normal" : "600",
      lineHeight: 25,
      fontSize: props.size === "small" ? 16 : 24,
      color: props.color || COLOR_PALETTE.primary,
    },
  });

export default FormattedPrice;
