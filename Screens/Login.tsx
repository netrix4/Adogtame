import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import LoginInputs from "../Components/LoginInputs";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <SafeAreaView>
        <View style={styles.mainContainer}>
          {/* <Image style={styles.mainImage} source={adogtameIcon} /> */}
          <LoginInputs />
          <View style={styles.buttonNavigationContainer}>
            <View style={styles.loginButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DashBoard");
                }}
                style={styles.loginButton}
              >
                <Text style={styles.loginText}>Iniciar sesión</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.recoverTextsContainer}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={styles.recoverTexts}>
                ¿No tienes una cuenta?
                <Text style={{ fontWeight: "bold" }}> Regístrate</Text>
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
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
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
