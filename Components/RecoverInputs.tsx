import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

export default function RecoverInputs() {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitleText}>Cambiar contraseña 🐾</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.passwordGeneralContainer}>
          <Text style={styles.texts}>Nueva contraseña</Text>
          <View style={styles.passwordContainers}>
            <TextInput
              ref={firstInputRef}
              returnKeyType="done"
              secureTextEntry={hidePassword}
              placeholder="contraseña"
              textContentType="password"
              keyboardType="visible-password"
              value={newPassword}
              onChangeText={setNewPassword}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons
                name={hidePassword ? "eye" : "eye-off"}
                color={"black"}
                size={fontSizes}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.passwordGeneralContainer}>
          <Text style={styles.texts}>Confirmar contraseña</Text>
          <View style={styles.passwordContainers}>
            <TextInput
              ref={secondInputRef}
              returnKeyType="done"
              secureTextEntry={hidePassword}
              placeholder="contraseña"
              textContentType="password"
              keyboardType="visible-password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons
                name={hidePassword ? "eye" : "eye-off"}
                color={"black"}
                size={fontSizes}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DashBoard");
          }}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const fontSizes = 23;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 10,
    gap: 35,
  },
  texts: {
    fontSize: fontSizes,
  },
  mainTitleText: {
    fontSize: fontSizes * 1.5,
    alignSelf: "center",
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 30,
  },
  passwordContainers: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 10,
  },
  passwordInput: {
    width: "100%",
    backgroundColor: "white",
    fontSize: fontSizes,
  },
  passwordGeneralContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  loginButtonContainer: {
    alignItems: "center",
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
});
