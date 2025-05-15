import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../lib/supabase";

export default function RegisterInputs() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);
  const fifthInputRef = useRef(null);

  const validEmailRegex =
    /^([a-zA-Z]+([0-9]{1,8})?)@((gmail)|(ite)|(hotmail)|(outlook)).((edu).)?(mx|com)$/;

  const validPassRegex = /(?=.*[A-Z]).{4,}/gm;
  const validCellPhone = /^([0-9]){10,10}$/gm;
  const validAddress =
    /^(([a-zA-Z0-9 ]+){0,5}, ?#?[0-9]+), ?([a-zA-Z0-9]+), ?([a-zA-Z0-9]+) ?$/gm;

  const handleRegister = async () => {
    let validationResults: Boolean[] = [];

    validationResults.push(validEmailRegex.test(email));
    validationResults.push(validPassRegex.test(password));
    validationResults.push(validCellPhone.test(telefono));
    validationResults.push(validAddress.test(direccion));

    const isAllOk = (): Boolean => {
      validationResults.forEach((result: Boolean) => {
        if (result == false) {
          return result;
        }
      });
      return true;
    };
    if (isAllOk()) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nombre,
            telefono,
            direccion,
            tipo_usuario: "adoptante",
          },
        },
      });
      if (error) {
        Alert.alert("Error al registrar", error.message);
      } else {
        setShowModal(true);
      }
    }
  };

  const onEmailchange = (changingString: string) => {
    setEmail(changingString);
  };
  const onPasswordChange = (changingPass: string) => {
    setPassword(changingPass);
  };
  const onNameChange = (changingName: string) => {
    if (!/([0-9])/gm.test(changingName)) {
      setNombre(changingName);
    }
  };
  const onDireccionChange = (changingAddress: string) => {
    setDireccion(changingAddress);
  };
  const onCellPhoneNumberChange = (changingCell: string) => {
    if (!/([a-zA-Z])/gm.test(changingCell)) {
      setTelefono(changingCell);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.mainImage}
        source={require("../assets/Original.jpg")}
      />
      <Text style={styles.mainTitleText}>Adogtame 🐾</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Nombre</Text>
          <TextInput
            ref={firstInputRef}
            returnKeyType="next"
            onSubmitEditing={() => secondInputRef?.current?.focus()}
            placeholder="nombre completo"
            onChangeText={onNameChange}
            value={nombre}
            style={styles.emailInput}
          />
        </View>
        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Número de celular</Text>
          <TextInput
            ref={secondInputRef}
            returnKeyType="next"
            onSubmitEditing={() => thirdInputRef?.current?.focus()}
            placeholder="10 dígitos"
            maxLength={10}
            keyboardType="number-pad"
            onChangeText={onCellPhoneNumberChange}
            value={telefono}
            style={styles.emailInput}
          />
          <Text style={styles.invalidField}>
            {validCellPhone.test(telefono) == false
              ? "Número de télefono inválido"
              : ""}
          </Text>
        </View>
        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Correo Electrónico</Text>
          <TextInput
            ref={thirdInputRef}
            returnKeyType="next"
            onSubmitEditing={() => fourthInputRef?.current?.focus()}
            placeholder="ejemplo@gmail.com"
            keyboardType="email-address"
            onChangeText={onEmailchange}
            value={email}
            style={styles.emailInput}
          />
          <Text style={styles.invalidField}>
            {validEmailRegex.test(email) == false
              ? "Correo electrónico inválido"
              : ""}
          </Text>
        </View>
        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Dirección</Text>
          <TextInput
            ref={fourthInputRef}
            returnKeyType="next"
            onSubmitEditing={() => fifthInputRef?.current?.focus()}
            placeholder="calle, num, colonia, ciudad"
            onChangeText={onDireccionChange}
            value={direccion}
            style={styles.emailInput}
          />
        </View>
        <View style={styles.passwordGeneralContainer}>
          <Text style={styles.texts}>Contraseña</Text>
          <TextInput
            ref={fifthInputRef}
            returnKeyType="done"
            secureTextEntry={hidePassword}
            placeholder="contraseña"
            value={password}
            onChangeText={onPasswordChange}
            style={styles.emailInput}
          />
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.passwordEye}
          >
            <Ionicons
              name={hidePassword ? "eye" : "eye-off"}
              color={"black"}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.invalidField}>
          {validPassRegex.test(password) == false
            ? "Contraseña incorrecta; usa al menos una letra mayuscula y mas de 4 letras"
            : ""}
        </Text>
      </View>

      <View style={styles.loginButtonContainer}>
        <TouchableOpacity onPress={handleRegister} style={styles.loginButton}>
          <Text style={styles.loginText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recoverTextsContainer}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ fontWeight: "bold" }}> Volver</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.acceptText}>
              Se ha enviado una confirmación al correo proporcionado. Favor de
              revisarlo.
            </Text>
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => {
                setShowModal(false);
                navigation.goBack();
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
  invalidField: {
    color: "red",
  },
});
