import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import React from "react";
import RegisterInputs from "../Components/RegisterInputs";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const navigation = useNavigation();
  const { session, loading } = useAuth();

  if (session) {
    navigation.navigate("DashBoard" as never);
  } else {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={"position"}>
        <SafeAreaView>
          <View style={styles.mainContainer}>
            <RegisterInputs />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
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
