import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLOR_PALETTE } from "../../../helpers/Constants";
import { IPartner } from "../../../types/Partner";
import Card from "./Card";

type PartnerCardProps = IPartner;

const PartnerCard: React.FC<PartnerCardProps> = ({ name, comments, url }) => (
  <View style={styles.mainWrapper}>
    <Card>
      <View style={styles.contentWrapper}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.commentsWrapper}>
          <Text>{comments}</Text>
        </View>
        <View style={styles.urlWrapper}>
          <Text>URL: </Text>
          <Text style={styles.url}>{url}</Text>
        </View>
      </View>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  mainWrapper: { margin: 5, maxHeight: 167 },
  contentWrapper: {
    padding: 20,
    justifyContent: "space-around",
    height: "100%",
  },
  name: {
    color: COLOR_PALETTE.primary,
    fontWeight: "700",
    fontSize: 16,
  },
  commentsWrapper: {
    flex: 2,
  },
  urlWrapper: {
    flexDirection: "row",
    flex: 0.5,
    alignItems: "center",
  },
  url: {
    fontSize: 16,
    color: COLOR_PALETTE.lightGray,
  },
});

export default PartnerCard;
