import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../lib/supabase";
import adogtameIcon from "../assets/Logo.svg";

export default function LoginInputs() {
  const navigation = useNavigation();
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [validCredentials, setValidCredentials] = useState(true);
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      Alert.alert("Error al iniciar sesión", error.message);
      setValidCredentials(false);
    } else {
      setValidCredentials(true);
      navigation.navigate("DashBoard" as never);
    }
  };

  const onEmailChangeText = (changingString: string) => {
    const passedValue = changingString;
    setEmail(passedValue);
  };

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.mainImage} source={adogtameIcon} />
      <Text style={styles.mainTitleText}>Adogtame 🐾</Text>

      <View style={styles.inputsContainer}>
        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Correo electrónico</Text>
          <TextInput
            ref={firstInputRef}
            returnKeyType="next"
            onSubmitEditing={() => secondInputRef?.current?.focus()}
            placeholder="Ejemplo@gmail.com"
            placeholderTextColor="gray"
            textContentType="emailAddress"
            keyboardType="email-address"
            style={styles.emailInput}
            clearButtonMode="while-editing"
            onChangeText={onEmailChangeText}
            value={email}
          />
        </View>

        <View style={styles.passwordGeneralContainer}>
          <Text style={styles.texts}>Contraseña</Text>
          <TextInput
            ref={secondInputRef}
            returnKeyType="done"
            secureTextEntry={hidePassword}
            placeholder="Contraseña"
            placeholderTextColor="gray"
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
          onPress={() => navigation.navigate("Recover" as never)}
        >
          <Text style={styles.recoverTexts}>
            ¿Olvidaste tu contraseña?{" "}
            <Text style={{ fontWeight: "bold" }}>Recupérala</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonNavigationContainer}>
        <View style={styles.loginButtonContainer}>
          <Text style={styles.invalidField}>
            {validCredentials ? "" : "Credenciales invalidas, revisalas"}
          </Text>
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.loginText}>Iniciar Sesión</Text>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.recoverTextsContainer}
          onPress={() => {
            navigation.navigate("Register" as never);
          }}
        >
          <Text style={styles.recoverTexts}>
            ¿No tienes una cuenta?
            <Text style={{ fontWeight: "bold" }}> Regístrate</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const fontSizes = 20;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "3%",
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
    gap: 10,
  },
  buttonNavigationContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    flexDirection: "column",
    width: "100%",
  },
  emailInput: {
    display: "flex",
    borderColor: "#C9B892",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "100%",
    backgroundColor: "white",
    fontSize: fontSizes * 0.8,
  },
  passwordGeneralContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },  
  passwordEye: {
    width: 30,
    position: "absolute",
    right: 10,
    alignItems: "center",
    bottom: 10,
  },
  loginButtonContainer: {
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#C9B892",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "black",
    fontSize: fontSizes * 0.9,
    fontWeight: "500",
  },
  invalidField: {
    color: "red",
    fontSize: fontSizes * 0.8,
  },
});
