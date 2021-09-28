import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { Instrument } from "../components/ui";
import { useQuery } from "react-query";
import { fetchInstrumentList } from "../queries/Instruments/query";
import { IInstrument } from "../types/Instrument";
import { COLOR_PALETTE } from "../helpers/Constants";
import { APIResponse } from "../types/Api";
import { ListScreenRouteProps } from "../types/Screens";
import LoadingOverlay from "../components/ui/LoadingOverlay";

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

const ListScreen: React.FC<ListScreenRouteProps> = ({ navigation }) => {
  const {
    data: response,
    error,
    isError,
    isLoading,
    refetch,
  } = useQuery<APIResponse<IInstrument[]>, { message: string }>(
    "instruments",
    fetchInstrumentList
  );

  const handleOnPress = (id: string) => {
    navigation.navigate("Detail", {
      id,
    });
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
    <SafeAreaView style={styles.container}>
      {response && response.data.length > 0 && (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={refetch}
              progressViewOffset={10}
              colors={[COLOR_PALETTE.primary]}
              tintColor={COLOR_PALETTE.primary}
            />
          }
          data={response.data}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Instrument
                onPress={() => handleOnPress(item.id)}
                key={item.id}
                changePercentage={item.changePercent24Hr}
                rank={item.rank}
                name={item.name}
                symbol={item.symbol}
                price={item.priceUsd}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
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
