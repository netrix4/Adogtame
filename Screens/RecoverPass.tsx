import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";
import RecoverInputs from "../Components/RecoverInputs";

export default function RecoverPass() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <Image
            style={styles.mainImage}
            source={require("../assets/Original.jpg")}
          />
          <RecoverInputs />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
});
