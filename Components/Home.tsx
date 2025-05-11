import { Text, StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import AnimalCard from "./AnimalCard";
import ListHeaderHome from "./ListHeaderHome";

export default function Home() {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.mainContainer}
        contentContainerStyle={styles.flatListContentStyle}
        ListHeaderComponent={ListHeaderHome}
        data={Array(10)}
        renderItem={(item) => <AnimalCard />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    // height: "90%",
    // maxHeight: "90%",
    width: "100%",
  },
  flatListContentStyle: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingHorizontal: "5%",
    paddingVertical: 15,
    paddingBottom: "15%",

    // alignSelf: "center",
    // justifyContent: "center",
  },
});
