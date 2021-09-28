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

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  /* ToDo: Get the id param from the route */
  const {
    data: response,
    refetch,
    isError,
    error,
    isLoading,
  } = useQuery<APIResponse<IInstrument>, { message: string }>(
    "instrumentDetails",
    () => fetchItemById(route.params.id)
  );
  const item = response?.data;

  const handleOnPress = () => {
    refetch();
  };

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
            onPress={handleOnPress}
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

const mockData = {
  data: {
    id: "bitcoin",
    rank: "1",
    symbol: "BTC",
    name: "Bitcoin",
    supply: "17193925.0000000000000000",
    maxSupply: "21000000.0000000000000000",
    marketCapUsd: "119179791817.6740161068269075",
    volumeUsd24Hr: "2928356777.6066665425687196",
    priceUsd: "6931.5058555666618359",
    changePercent24Hr: "-0.8101417214350335",
    vwap24Hr: "7175.0663247679233209",
  },
};
