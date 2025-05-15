import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Platform,
  useWindowDimensions,
  BackHandler,
} from "react-native";
import React from "react";
import AnimalCard from "./AnimalCard";
import ListHeaderHome from "./ListHeaderHome";

export default function Home() {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView>
      <FlatList
        style={[
          styles.mainContainer,
          { height: Platform.OS != "web" ? "100%" : height },
        ]}
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
    width: "100%",
  },
  flatListContentStyle: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingHorizontal: Platform.OS === "android" ? "5%" : "25%",
    //Ojo con esto
    // marginTop: Platform.OS === "ios" ? "3%" : "10%",
    // paddingBottom: Platform.OS === "ios" ? "15%" : "28%",
    marginTop: Platform.OS === "android" ? "10%" : "3%",
    paddingBottom: Platform.OS === "android" ? "15%" : "10%",
  },
});
