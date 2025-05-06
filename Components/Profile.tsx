import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text>Profile</Text>
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
