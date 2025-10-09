import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import * as Linking from "expo-linking";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../lib/supabase";
import logo from "../assets/Logo.png";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [sessionReady, setSessionReady] = useState(false);

  const navigation = useNavigation();
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  useEffect(() => {
    const getTokenFromUrl = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        const fragment = url.split("#")[1];
        const params = new URLSearchParams(fragment);
        const access_token = params.get("access_token");
        const refresh_token = params.get("refresh_token");

        if (access_token && refresh_token) {
          const { error } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          });

          if (error) {
            Alert.alert(
              "Error al iniciar sesión de recuperación",
              error.message
            );
            return;
          }

          setSessionReady(true);
        } else {
          Alert.alert("Error", "No se encontraron los tokens en la URL");
        }
      }
    };

    getTokenFromUrl();
  }, []);

  const handleChangePassword = async () => {
    if (!sessionReady) {
      Alert.alert(
        "Sesión no válida",
        "Intenta abrir el enlace de nuevo desde tu correo."
      );
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    await supabase.auth.signOut();

    Alert.alert(
      "Contraseña actualizada",
      "Inicia sesión con tu nueva contraseña."
    );
    setTimeout(() => navigation.replace("Login"), 500);
  };

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.mainImage} source={logo} />
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
              size={20}
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
              size={20}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleChangePassword}
        >
          <Text style={styles.loginText}>Actualizar contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "65%",
    gap: 15,
    alignSelf: "center",
    marginTop: 40,
  },
  texts: {
    fontSize: 20,
  },
  mainTitleText: {
    fontSize: 30,
    alignSelf: "center",
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  loginButton: {
    backgroundColor: "#C9B892",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 20,
    color: "#000",
  },
  emailInput: {
    display: "flex",
    borderColor: "C9B892",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    width: "100%",
    backgroundColor: "white",
    fontSize: 20,
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
});
