import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.illustration} source={require('../assets/home-illustration.png')} />
      <Text style={styles.title}>Howdy partner!</Text>
      <Text>This is your assignment.</Text>
      <Text>Follow the instructions on the Readme file.</Text>
      <Text>Don’t worry, it’s easy! You should have the app looking smooth in no time.</Text>
      <Button title="Start Here" onPress={() => alert('Home')} />
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
  illustration: {
    width: 256,
    height: 256,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
