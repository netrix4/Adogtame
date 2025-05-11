import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import RegisterInputs from "../Components/RegisterInputs";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      // behavior={Platform.OS === "ios" ? "position" : "height"}
      behavior={"position"}
    >
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <Image
            style={styles.mainImage}
            source={require("../assets/Original.jpg")}
          />
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
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    // gap: 30,
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
