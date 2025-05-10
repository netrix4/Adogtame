import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
  SafeAreaView,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import Login from "../Screens/Login";

export default function RegisterInputs() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);
  const fifthInputRef = useRef(null);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitleText}>Adogtame 🐾</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Nombre</Text>
          <View style={styles.emailContainer}>
            <TextInput
              ref={firstInputRef}
              returnKeyType="next"
              onSubmitEditing={() => secondInputRef?.current?.focus()}
              placeholder="nombre completo"
              textContentType="name"
              keyboardType="name-phone-pad"
              style={styles.emailInput}
              clearButtonMode="while-editing"
            />
          </View>
        </View>
        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Número de celular</Text>
          <View style={styles.emailContainer}>
            <TextInput
              ref={secondInputRef}
              returnKeyType="next"
              onSubmitEditing={() => thirdInputRef?.current?.focus()}
              placeholder="10[0-9]"
              textContentType="telephoneNumber"
              keyboardType="number-pad"
              style={styles.emailInput}
              clearButtonMode="while-editing"
            />
          </View>
        </View>
        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Correo Electronico</Text>
          <View style={styles.emailContainer}>
            <TextInput
              ref={thirdInputRef}
              returnKeyType="next"
              onSubmitEditing={() => fourthInputRef?.current?.focus()}
              placeholder="ejemplo@gmail.com"
              textContentType="emailAddress"
              keyboardType="email-address"
              style={styles.emailInput}
              clearButtonMode="while-editing"
            />
          </View>
        </View>

        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Dirección</Text>
          <View style={styles.emailContainer}>
            <TextInput
              ref={fourthInputRef}
              returnKeyType="next"
              onSubmitEditing={() => fifthInputRef?.current?.focus()}
              placeholder="calle, num, colonia, ciudad"
              textContentType="addressCity"
              keyboardType="default"
              style={styles.emailInput}
              clearButtonMode="while-editing"
            />
          </View>
        </View>

        <View style={styles.passwordGeneralContainer}>
          <Text style={styles.texts}>Contraseña</Text>
          <View style={styles.passwordContainers}>
            <TextInput
              ref={fifthInputRef}
              returnKeyType="done"
              secureTextEntry={hidePassword}
              placeholder="contraseña"
              textContentType="password"
              keyboardType="visible-password"
              value={password}
              onChangeText={setPassword}
              style={styles.passwordInput}
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
        </View>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("DashBoard");
            setShowModal(!showModal);
          }}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={showModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.acceptText}>
              Se ha enviado una confirmacion al correo porporcionado. Favor de
              revisarlo
            </Text>
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => {
                setShowModal(false);
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.acceptButtonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    width: "65%",
    gap: 20,
  },
  emailGeneralContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  passwordGeneralContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
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
  emailContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 10,
  },
  emailInput: {
    width: "100%",
    backgroundColor: "white",
    fontSize: fontSizes,
  },
  passwordContainers: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 10,
  },
  passwordInput: {
    width: "90%",
    backgroundColor: "white",
    fontSize: fontSizes,
  },
  passwordEye: {
    width: "10%",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // opcional para oscurecer fondo
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
