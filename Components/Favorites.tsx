import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Favorites() {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text>Favorites</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
