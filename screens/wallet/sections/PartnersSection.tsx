import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { Card, PartnerCard } from "../../../components/ui";
import React from "react";
import { IPartner } from "../../../types/Partner";
import { COLOR_PALETTE } from "../../../helpers/Constants";

const partnerList: IPartner[] = [
  {
    name: "Criptocurrency Exchange",
    url: "Not Released",
    comments: `Leading Argentina frontend team.
I have built client and admin side of a Credit Limit Order Book, throttling updates and code refactor.
Stack: WebSockets, WebWorkers, Typescript, Redux, Styled-Components, Axios, Material UI.`,
  },
  {
    name: "CRM Tool",
    url: "Internal Platform",
    comments:
      "Developed CRUD operations for a CRM platform that used PHP and Symphony",
  },
  {
    name: "TPAY",
    url: "https://www.tassatpay.com/",
    comments: `Multibank solution for wire transfers (ACH/Fedwire) between bank entities. Features development, code refactor and redux selectors optimization.
Developed a WebSocket based mock server using Nodejs.
Contribute on theming the application, typescript implementarion and shared-components monorepo.`,
  },
  {
    name: "Think Cerca Managment",
    url: "Internal Platform",
    comments: `I was part of the frontend team, building an e-learning platform. Features developing and code refactor`,
  },
  {
    name: "Simple Q",
    url: "Not Released",
    comments: `I was part of the frontend team, building an e-learning platform. Features developing and code refactor`,
  },
];
const PartnersSection = () => {
  const ListItem = ({ item }: { item: IPartner }) => {
    return (
      <View style={{ margin: 5, maxHeight: 167 }}>
        <Card>
          <View
            style={{
              padding: 20,
              justifyContent: "space-around",
              height: "100%",
            }}
          >
            <View style={{ flex: 0.5 }}>
              <Text
                style={{
                  color: COLOR_PALETTE.primary,
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                {item.name}
              </Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text>{item.comments}</Text>
            </View>
            <View
              style={{ flexDirection: "row", flex: 0.5, alignItems: "center" }}
            >
              <Text>URL: </Text>
              <Text style={{ fontSize: 16, color: COLOR_PALETTE.lightGray }}>
                {item.url}
              </Text>
            </View>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Partners</Text>
      <Text style={styles.subtitle}>Here are some apps I was involved in:</Text>
      {partnerList && partnerList.length > 0 ? (
        <ScrollView>
          {React.Children.toArray(
            partnerList.map((item) => <PartnerCard {...item} />)
          )}
        </ScrollView>
      ) : (
        <Text>No Apps 🙈</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.grayBackground,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    margin: 24,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 24,
  },
});

export default PartnersSection;
