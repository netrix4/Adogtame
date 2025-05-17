import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import React from "react";
import RecoverInputs from "../Components/RecoverInputs";
import { useNavigation } from "@react-navigation/native";
import RecoverEmailScreen from "../Components/RecoverEmailScreen";

export default function RecoverPass() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "android" ? "height" : "height"}
    >
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <RecoverEmailScreen />
          <View style={styles.buttonNavigationContainer}>
            
            <TouchableOpacity
              style={styles.recoverTextsContainer}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={styles.recoverTexts}>
                ¿Ya la recordaste?
                <Text style={{ fontWeight: "bold" }}> Volver</Text>
              </Text>
            </TouchableOpacity>
          </View>
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
    // paddingVertical: "2%",
    height: "100%",
    alignItems: "center",
    gap: 30,
    justifyContent: "space-evenly",
  },
  buttonNavigationContainer: {
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonContainer: {
    // alignItems: "center",
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#33658A",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: fontSizes,
    color: "white",
  },

  recoverTextsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  recoverTexts: {
    fontSize: fontSizes * 0.7,
  },
});