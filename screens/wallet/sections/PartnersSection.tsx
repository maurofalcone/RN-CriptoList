import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { PartnerCard } from "../../../components/ui";
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

const renderPartnerCard = ({ item }: { item: IPartner }) => (
  <PartnerCard {...item} />
);
const PartnersSection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Partners</Text>
      <Text style={styles.subtitle}>Here are some apps I was involved in:</Text>
      {partnerList && partnerList.length > 0 ? (
        <FlatList
          data={partnerList}
          renderItem={renderPartnerCard}
          keyExtractor={(item) => item.name}
        />
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
    padding: 25,
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
