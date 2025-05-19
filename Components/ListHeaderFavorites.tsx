import { StyleSheet, View, Text, Image } from "react-native";
import logo from "../assets/Logo.svg";
import React from "react";

export default function ListHeaderFavorites() {
  return (
    <View style={styles.mainTitleContainer}>
      <View style={styles.genericTitleContainer}>
        <Image source={logo} style={styles.adogtameImg} />
        <Text style={styles.adogtameTitle}>Adogtame 🐾</Text>
      </View>
      <Text style={styles.resourcesTitle}>Favoritos</Text>
    </View>
  );
}

const fontSizes = 20;

const styles = StyleSheet.create({
  mainTitleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  genericTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  adogtameImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  adogtameTitle: {
    fontSize: fontSizes * 1.7,
  },
  resourcesTitle: {
    fontSize: fontSizes * 1.7,
    fontWeight: "bold",
  },
});
