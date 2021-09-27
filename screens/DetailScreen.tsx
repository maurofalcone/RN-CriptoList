import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';

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

export default function ListScreen() {
  /* ToDo: Get the id param from the route */
  const id = 'bitcoin';
  const item = mockData.data;

  return (
    <View style={styles.container}>
      {item ? (
        <View>
          <Text>itemId: {JSON.stringify(id)}</Text>
          <Text>#{item.rank}</Text>
          <Text>{item.symbol}</Text>
          <Text>{item.name}</Text>
          <Text>USD {item.priceUsd}</Text>
          <Text>Last24 {item.changePercent24Hr}</Text>
          <Text>Supply {item.supply}</Text>
          <Text>Max Supply {item.maxSupply}</Text>
          <Text>Market Cap Usd {item.marketCapUsd}</Text>

          <Button title="My Wallet" onPress={() => alert('Wallet')} />
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mockData = {
  data: {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    supply: '17193925.0000000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '119179791817.6740161068269075',
    volumeUsd24Hr: '2928356777.6066665425687196',
    priceUsd: '6931.5058555666618359',
    changePercent24Hr: '-0.8101417214350335',
    vwap24Hr: '7175.0663247679233209',
  },
};
