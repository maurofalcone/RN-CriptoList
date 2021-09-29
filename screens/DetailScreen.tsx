import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useQuery } from "react-query";
import { Button, Instrument, LoadingOverlay } from "../components/ui";
import { COLOR_PALETTE } from "../helpers/Constants";
import { DetailScreenRouteProps } from "../types/Screens";
import { fetchItemById } from "../queries/Instruments/query";
import { IInstrument } from "../types/Instrument";
import { APIResponse } from "../types/Api";

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets/{id}
 * API Example: https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

interface DetailScreenProps extends DetailScreenRouteProps {
  id: string;
}

const DetailScreen: React.FC<DetailScreenProps> = ({ navigation, route }) => {
  /* ToDo: Get the id param from the route */
  const {
    data: response,
    isError,
    error,
    isLoading,
  } = useQuery<APIResponse<IInstrument>, { message: string }>(
    route.params.id,
    () => fetchItemById(route.params.id),
    { enabled: !!route.params.id }
  );
  const item = response?.data;

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (isError) {
    return (
      <View>
        <Text>{error && error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {item ? (
        <View style={styles.contentWrapper}>
          <Instrument
            disabled
            name={item.name}
            price={item.priceUsd}
            changePercentage={item.changePercent24Hr}
            supply={item.supply}
            symbol={item.symbol}
            showDetails
            marketCapUsd={item.marketCapUsd}
            maxSupply={item.maxSupply}
            rank={item.rank}
          />
          <View style={styles.btnContainer}>
            <Button title="My Wallet" onPress={() => alert("Wallet")} />
          </View>
        </View>
      ) : (
        <LoadingOverlay />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.white,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentWrapper: {
    marginTop: 20,
  },
  btnContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default DetailScreen;
