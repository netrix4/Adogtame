import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import React from "react";
import LoginInputs from "../Components/LoginInputs";

export default function Login() {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Image
          style={styles.mainImage}
          source={require("../assets/Original.jpg")}
        />
        <LoginInputs />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  mainContainer: {
    display: "flex",
    // flex: 1,
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    // marginVertical: 10,
  },
});
