import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";
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
    // marginTop: "7%",
    width: "100%",
  },
  flatListContentStyle: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingHorizontal: "5%",
    //Ojo con esto
    marginTop: Platform.OS === "ios" ? "3%" : "10%",
    paddingBottom: Platform.OS === "ios" ? "15%" : "28%",

    // alignSelf: "center",
    // justifyContent: "center",
  },
});
