import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import RegisterInputs from "../Components/RegisterInputs";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const { session, loading } = useAuth();

  if (session) {
    navigation.navigate("DashBoard" as never);
  } else {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={"position"}>
        <SafeAreaView>
          <View
            style={[
              styles.mainContainer,
              {
                height: Platform.OS === "web" ? width : "100%",
              },
            ]}
          >
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
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 30,
    justifyContent: "space-between",
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
