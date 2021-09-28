import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Instrument from "../components/ui/Instrument";
import { useQuery } from "react-query";
import { fetchInstrumentList } from "../queries/Instruments/query";
import { IInstrument } from "../types/Instrument";
import { COLOR_PALETTE } from "../helpers/Constants";
import { APIResponse } from "../types/Api";

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets
 * API Example: https://docs.coincap.io/#89deffa0-ab03-4e0a-8d92-637a857d2c91
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

const ListScreen = () => {
  const {
    data: response,
    error,
    isError,
    isLoading,
  } = useQuery<APIResponse<IInstrument>, { message: string }>(
    "instruments",
    fetchInstrumentList
  );

  if (isLoading) {
    return (
      <View style={styles.loadingOverlay}>
        <ActivityIndicator color={COLOR_PALETTE.primary} size="large" />
      </View>
    );
  }
  if (isError) {
    return (
      <View>
        <Text>{error && error.message}</Text>
      </View>
    );
  }
  if (response) {
    console.log(response.data);
  }
  return (
    <View style={styles.container}>
      {response && response.data.length > 0 && (
        <ScrollView>
          {React.Children.toArray(
            response.data.map((item) => (
              <View style={styles.itemContainer}>
                <Instrument
                  key={item.id}
                  changePercentage={item.changePercent24Hr}
                  rank={item.rank}
                  security={item.name}
                  symbol={item.symbol}
                />
              </View>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },
  loadingOverlay: {
    flex: 1,
    justifyContent: "center",
  },
  illustration: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    marginVertical: 6,
    padding: 8,
  },
});

export default ListScreen;
