import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { Instrument } from "../components/ui";
import { useQuery } from "react-query";
import { fetchInstrumentList } from "../queries/Instruments/query";
import { IInstrument } from "../types/Instrument";
import { COLOR_PALETTE, ROUTES } from "../helpers/Constants";
import { APIResponse } from "../types/Api";
import { ListScreenRouteProps } from "../types/Screens";
import LoadingOverlay from "../components/ui/LoadingOverlay";

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

  const handleOnPress = useCallback(
    (id: string) => {
      navigation.navigate(ROUTES.Detail, {
        id,
      });
    },
    [navigation]
  );

  const renderInstrument = ({ item }: { item: IInstrument }) => (
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
  );

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
          renderItem={renderInstrument}
          keyExtractor={(item) => item.id}
          removeClippedSubviews
          maxToRenderPerBatch={8}
          windowSize={30}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.grayBackground,
    padding: 8,
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
