import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import RecoverEmailScreen from "../Components/RecoverEmailScreen";

export default function RecoverPass() {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "android" ? "height" : "position"}
    >
      <SafeAreaView>
        <View
          style={[
            styles.mainContainer,
            {
              height: Platform.OS === "web" ? height : "100%",
            },
          ]}
        >
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
    alignItems: "center",
    gap: 30,
    // justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  buttonNavigationContainer: {
    width: "65%",
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
    color: "#000",
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
