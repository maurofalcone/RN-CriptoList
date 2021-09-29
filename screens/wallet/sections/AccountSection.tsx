import React, { useContext } from "react";
import { COLOR_PALETTE } from "../../../helpers/Constants";
import { StyleSheet, SafeAreaView, Text, Image } from "react-native";
import { AuthContext } from "../../../context/AuthContext";

const AccountSection = () => {
  const context = useContext(AuthContext);
  const username = context?.loggedInUser || "-";
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.illustration}
        source={require("../../../assets/finish-illustration.png")}
      />
      <Text style={styles.title}>Hello, {username}</Text>
      <Text>Glad you are here, hope to see you soon.</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.white,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    width: 256,
    height: 160,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
  },
});

export default AccountSection;
