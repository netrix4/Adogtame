import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import LoginInputs from "../Components/LoginInputs";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const navigation = useNavigation();
  const { session, loading } = useAuth();

  useEffect(() => {
    if (session) {
      navigation.navigate("DashBoard" as never);
    }
  }, [session]);

  if (session) {
    // navigation.navigate("DashBoard" as never);
    return null;
  } else {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "position" : "height"}
      >
        <SafeAreaView>
          <View style={styles.mainContainer}>
            <LoginInputs />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}
const fontSizes = 20;

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
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonNavigationContainer: {
    width: "65%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonContainer: {
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
