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
import { useNavigation } from "@react-navigation/native";
import adogtameIcon from "../assets/Original.jpg";

export default function LoginInputs() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.mainImage} source={adogtameIcon} />
      <Text style={styles.mainTitleText}>Adogtame 🐾</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Correo Electronico</Text>

          <TextInput
            ref={firstInputRef}
            returnKeyType="next"
            onSubmitEditing={() => secondInputRef?.current?.focus()}
            placeholder="ejemplo@gmail.com"
            textContentType="emailAddress"
            keyboardType="email-address"
            style={styles.emailInput}
            clearButtonMode="while-editing"
          />
        </View>

        <View style={styles.passwordGeneralContainer}>
          <Text style={styles.texts}>Contraseña</Text>
          <TextInput
            ref={secondInputRef}
            returnKeyType="done"
            secureTextEntry={hidePassword}
            placeholder="contraseña"
            textContentType="password"
            keyboardType="default"
            value={password}
            onChangeText={setPassword}
            style={styles.emailInput}
          />
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.passwordEye}
          >
            <Ionicons
              name={hidePassword ? "eye" : "eye-off"}
              color={"black"}
              size={fontSizes}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.recoverTextsContainer}
          onPress={() => navigation.navigate("Recover")}
        >
          <Text style={styles.recoverTexts}>
            ¿Olvidaste tu contraseña?
            <Text style={{ fontWeight: "bold" }}> Recupérala</Text>
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DashBoard");
          }}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Registrarse</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
const fontSizes = 20;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    width: "65%",
    gap: 15,
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
