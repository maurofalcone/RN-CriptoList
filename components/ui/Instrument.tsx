import React, { FC, ComponentProps } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
} from "react-native";
import { currencyToNumber, isPositive } from "../../helpers/Formatters";
import FormattedPrice from "./FormattedPrice";
import Percent from "./Percent";
import { COLOR_PALETTE } from "../../helpers/Constants";

const Instrument: FC<
  ComponentProps<typeof TouchableOpacity> & {
    security: string;
    symbol: string;
    rank: string;
    changePercentage: string;
  }
> = ({ children, security, symbol, changePercentage, rank, ...rest }) => (
  <View style={styles.mainWrapper}>
    <TouchableOpacity style={styles.wrapper} {...rest}>
      <View style={styles.groupsContainer}>
        <View style={styles.firstGroup}>
          <Text style={styles.symbol}>{symbol}</Text>
          <Text style={styles.security}>{` - ${security}`}</Text>
        </View>
        <View style={styles.secondGroup}>
          <Text style={styles.position}>#{rank}</Text>
        </View>
      </View>
      <View style={styles.groupsContainer}>
        <View style={styles.firstGroup}>
          <FormattedPrice currency="USD" value="25,221.22" />
        </View>
        <View style={styles.secondGroup}>
          <Percent
            isPositive={isPositive(currencyToNumber(changePercentage))}
            value={changePercentage}
          />
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  mainWrapper: {
    borderRadius: 8,
    backgroundColor: COLOR_PALETTE.white,
    ...Platform.select({
      ios: {
        shadowColor: COLOR_PALETTE.black,
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
          width: 1,
          height: 1,
        },
      },
      android: {
        elevation: 1,
      },
    }),
  },
  wrapper: {
    height: 100,
    width: 354,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 15,
  },
  groupsContainer: {
    flexDirection: "row",
    height: 25,
    justifyContent: "space-between",
    width: "100%",
  },
  firstGroup: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  secondGroup: {
    minWidth: 37,
    alignItems: "flex-end",
  },
  symbol: {
    fontSize: 18,
    fontWeight: "bold",
  },
  security: {
    fontSize: 16,
    color: "black",
    marginTop: 2,
  },
  position: {
    fontSize: 14,
    color: COLOR_PALETTE.lightGray,
  },
});

export default Instrument;
