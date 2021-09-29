import React, { ComponentProps } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
} from "react-native";
import { isPositive } from "../../../helpers/Checkers";
import FormattedPrice from "../labels/FormattedPrice";
import Percent from "../labels/Percent";
import { COLOR_PALETTE } from "../../../helpers/Constants";
import { IInstrument } from "../../../types/Instrument";
import currency from "currency.js";
import Card from "../wrappers/Card";

interface InstrumentProps
  extends ComponentProps<typeof TouchableOpacity>,
    Omit<
      IInstrument,
      | "explorer"
      | "id"
      | "priceUsd"
      | "changePercent24Hr"
      | "vwap24Hr"
      | "volumeUsd24Hr"
    > {
  symbol: string;
  rank: string;
  changePercentage: string;
  showDetails?: boolean;
  price: string;
}

class Instrument extends React.PureComponent<InstrumentProps> {
  constructor(props: InstrumentProps) {
    super(props);
  }
  render() {
    const {
      children,
      name,
      symbol,
      changePercentage,
      rank,
      showDetails = false,
      supply = "0.00",
      maxSupply = "0.00",
      marketCapUsd = "0.00",
      price,
      ...rest
    } = this.props;
    const formattedSupply = currency(supply, { symbol: "" }).format();
    const formattedMaxSupply = currency(maxSupply, { symbol: "" }).format();
    return (
      <Card>
        <TouchableOpacity style={styles(showDetails).wrapper} {...rest}>
          <View>
            <View style={styles().groupsContainer}>
              <View style={styles().firstGroup}>
                <Text style={styles().symbol}>{symbol}</Text>
                <Text style={styles().security}>{` - ${name}`}</Text>
              </View>
              <View style={styles().secondGroup}>
                <Text style={styles().position}>#{rank}</Text>
              </View>
            </View>
            <View style={styles().groupsContainer}>
              <View style={styles().firstGroup}>
                <FormattedPrice currencySymbol="USD" value={price} />
              </View>
              <View style={styles().secondGroup}>
                <Percent
                  isPositive={isPositive(currency(changePercentage))}
                  value={changePercentage}
                />
              </View>
            </View>
          </View>
          {showDetails && (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <Text>Supply {formattedSupply}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <Text>Max Supply {formattedMaxSupply}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <Text>Market Cap </Text>
                <FormattedPrice
                  color={COLOR_PALETTE.secondary}
                  size="small"
                  currencySymbol="USD"
                  value={marketCapUsd}
                />
              </View>
            </View>
          )}
        </TouchableOpacity>
      </Card>
    );
  }
}

const styles = (showDetails?: boolean) =>
  StyleSheet.create({
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
      height: showDetails ? 195 : 100,
      width: 354,
      borderRadius: 6,
      justifyContent: !showDetails ? "center" : "space-around",
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
