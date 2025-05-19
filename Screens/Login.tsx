import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import LoginInputs from "../Components/LoginInputs";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const navigation = useNavigation();
  const { session, loading } = useAuth();
  const { width, height } = useWindowDimensions();

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
          <View
            style={[
              styles.mainContainer,
              {
                height: Platform.OS === "web" ? width : "100%",
              },
            ]}
          >
            <LoginInputs />
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
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});
