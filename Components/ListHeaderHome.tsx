import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import adogtameImg from "../assets/Original.jpg";

const ListHeaderHome = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.mainTitleContainer}>
        <Image source={adogtameImg} style={styles.adogtameImg}></Image>
        <Text style={styles.adogtameTitle}>Adogtame 🐾</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={fontSizes}></Ionicons>
        <TextInput style={styles.searchBar} />
      </View>
    </View>
  );
};

export default ListHeaderHome;
const fontSizes = 20;
const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mainTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  adogtameImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  adogtameTitle: {
    fontSize: fontSizes * 1.7,
  },
  searchBarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: fontSizes / 2,
    paddingHorizontal: 5,
  },
  searchBar: {
    fontSize: fontSizes,
    marginVertical: 5,
    backgroundColor: "white",
  },
});
