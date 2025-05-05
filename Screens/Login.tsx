import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.texts}>Login</Text>
        <Text style={styles.texts}>Username</Text>
        <TextInput
          placeholder="username"
          style={styles.userNameInput}
          accessibilityHint="asdasdas"
          autoFocus={true}
          clearButtonMode="while-editing"
        ></TextInput>
        <Text style={styles.texts}>Password</Text>
        <TextInput
          placeholder="password"
          passwordRules="minlength: 20; required: lower; required: upper; required: digit; required: [-];"
          style={styles.userNameInput}
          accessibilityHint="asdasdas"
          autoFocus={true}
          clearButtonMode="while-editing"
        ></TextInput>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.texts}>Go Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const fontSizes = 20;
const styles = StyleSheet.create({
  root: {
    color: "white",
  },
  texts: {
    fontSize: fontSizes,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  userNameInput: {
    width: "65%",
    backgroundColor: "lightgrey",
    fontSize: fontSizes,
  },
});
