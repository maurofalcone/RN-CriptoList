import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useQuery } from "react-query";
import {
  Button,
  ErrorOverlay,
  Instrument,
  LoadingOverlay,
} from "../components/ui";
import { COLOR_PALETTE, ROUTES } from "../helpers/Constants";
import { DetailScreenRouteProps } from "../types/Screens";
import { fetchItemById } from "../queries/Instruments/query";
import { IInstrument } from "../types/Instrument";
import { APIResponse } from "../types/Api";
interface DetailScreenProps extends DetailScreenRouteProps {
  id: string;
}

const DetailScreen: React.FC<DetailScreenProps> = ({ navigation, route }) => {
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

  if (isError && error) {
    return <ErrorOverlay message={error.message} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {item ? (
        <View style={styles.contentWrapper}>
          <Instrument
            disabled
            accessibilityState={{
              disabled: true,
            }}
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
            <Button
              accessible
              accessibilityLabel="Go to my wallet screen"
              accessibilityHint="When you tap on my wallet button you will be taken to my wallet screen"
              title="My Wallet"
              onPress={() => navigation.navigate(ROUTES.Wallet)}
            />
          </View>
        </View>
      ) : (
        <LoadingOverlay />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.grayBackground,
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
