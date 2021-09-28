import React, { FC, ComponentProps } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Percent from "./Percent";

const Instrument: FC<
  ComponentProps<typeof TouchableOpacity> & {
    security: string;
    symbol: string;
    rank: string;
    percentage: string;
  }
> = ({ children, security, symbol, percentage, rank, ...rest }) => (
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
          <Text style={styles.price}>{`$ ${"54,292.95"}`}</Text>
          <Text style={styles.currency}>USD</Text>
        </View>
        <View style={styles.secondGroup}>
          <Percent positive={false} value="6.5" />
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  mainWrapper: {
    borderRadius: 8,
    backgroundColor: "#FFF",
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
    color: "#6B7280",
  },
  currency: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 10,
    marginLeft: 5,
  },
  price: {
    fontWeight: "600",
    lineHeight: 32,
    fontSize: 24,
    color: "#019FB5",
  },
});

export default Instrument;
