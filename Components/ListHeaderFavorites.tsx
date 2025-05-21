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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  genericTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10
  },
  adogtameImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  adogtameTitle: {
    fontSize: fontSizes * 1.5,
    fontWeight: "bold"
  },
  resourcesTitle: {
    fontSize: fontSizes * 1.4,
    fontWeight: "600",
  },
});
