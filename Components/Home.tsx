import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
