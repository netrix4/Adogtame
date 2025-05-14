import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import React from "react";
import RegisterInputs from "../Components/RegisterInputs";

export default function Login() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      // behavior={Platform.OS === "ios" ? "position" : "height"}
      behavior={"position"}
    >
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <RegisterInputs />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
const fontSizes = 20;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    gap: 30,
    justifyContent: "space-evenly",

    // paddingVertical: 100,
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  recoverTextsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "red",
  },
  recoverTexts: {
    fontSize: fontSizes * 0.7,
  },
});
