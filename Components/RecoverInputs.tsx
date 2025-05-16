import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import adogtameIcon from "../assets/Original.jpg";

export default function RecoverInputs() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.mainImage} source={adogtameIcon} />
      <Text style={styles.mainTitleText}>Cambiar contraseña 🐾</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.passwordGeneralContainer}>
          <Text style={styles.texts}>Nueva contraseña</Text>
          <TextInput
            ref={firstInputRef}
            returnKeyType="done"
            secureTextEntry={hideNewPassword}
            placeholder="contraseña"
            textContentType="password"
            keyboardType="default"
            value={newPassword}
            onChangeText={setNewPassword}
            style={styles.emailInput}
          />
          <TouchableOpacity
            onPress={() => setHideNewPassword(!hideNewPassword)}
            style={styles.passwordEye}
          >
            <Ionicons
              name={hideNewPassword ? "eye" : "eye-off"}
              color={"black"}
              size={fontSizes}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordGeneralContainer}>
          <Text style={styles.texts}>Confirmar contraseña</Text>

          <TextInput
            ref={secondInputRef}
            returnKeyType="done"
            secureTextEntry={hideConfirmPassword}
            placeholder="contraseña"
            textContentType="password"
            keyboardType="default"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.emailInput}
          />
          <TouchableOpacity
            onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
            style={styles.passwordEye}
          >
            <Ionicons
              name={hideConfirmPassword ? "eye" : "eye-off"}
              color={"black"}
              size={fontSizes}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const fontSizes = 20;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "10%",
    flexDirection: "column",
    width: "65%",
    gap: 15,
    alignSelf: "center",
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
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
    gap: 10,
  },

  recoverTextsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  recoverTexts: {
    fontSize: fontSizes * 0.7,
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
  emailGeneralContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  emailInput: {
    display: "flex",
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    width: "100%",
    backgroundColor: "white",
    fontSize: fontSizes,
  },
  passwordGeneralContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  passwordEye: {
    width: "10%",
    position: "absolute",
    right: 0,
    bottom: 7,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 30,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },

  acceptText: {
    fontSize: fontSizes * 1.1,
    textAlign: "center",
  },
  acceptButton: {
    backgroundColor: "#F28C28",
    width: "70%",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 8,
  },
  acceptButtonText: {
    color: "white",
    fontSize: fontSizes,
  },
});
