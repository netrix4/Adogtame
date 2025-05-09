import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginInputs() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.texts}>Adogtame 🐾</Text>
      <Text style={styles.texts}>Correo Electronico</Text>
      <View style={styles.emailContainer}>
        <TextInput
          ref={firstInputRef}
          returnKeyType="next"
          onSubmitEditing={() => secondInputRef?.current?.focus()}
          placeholder="ejemplo@gmail.com"
          textContentType="emailAddress"
          style={styles.emailInput}
          autoFocus={true}
          clearButtonMode="while-editing"
        />
      </View>
      <Text style={styles.texts}>Contrasena</Text>
      <View style={styles.passwordContainers}>
        <TextInput
          ref={secondInputRef}
          returnKeyType="done"
          secureTextEntry={hidePassword}
          placeholder="Password"
          textContentType="password"
          value={password}
          onChangeText={setPassword}
          style={styles.passwordInput}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "eye" : "eye-off"}
            color={"back"}
            size={fontSizes}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DashBoard");
        }}
      >
        <Text style={styles.texts}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}
const fontSizes = 23;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  texts: {
    fontSize: fontSizes,
  },
  emailContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "lightgrey",
    alignItems: "center",
    // justifyContent: "space-between",
    width: "65%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
  },
  emailInput: {
    width: "100%",
    backgroundColor: "lightgrey",
    fontSize: fontSizes,
  },
  passwordContainers: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
  },
  passwordInput: {
    width: "85%",
    backgroundColor: "lightgrey",
    fontSize: fontSizes,
  },
});
