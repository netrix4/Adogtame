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
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import  { supabase}  from "../lib/supabase";
import adogtameIcon from "../assets/Original.jpg";

export default function LoginInputs() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert("Error al iniciar sesión", error.message);
    } else {
      navigation.navigate("DashBoard");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.mainImage} source={adogtameIcon} />
      <Text style={styles.mainTitleText}>Adogtame 🐾</Text>

      <View style={styles.inputsContainer}>
        <View style={styles.emailGeneralContainer}>
          <Text style={styles.texts}>Correo Electrónico</Text>
          <TextInput
            ref={firstInputRef}
            returnKeyType="next"
            onSubmitEditing={() => secondInputRef?.current?.focus()}
            placeholder="ejemplo@gmail.com"
            textContentType="emailAddress"
            keyboardType="email-address"
            style={styles.emailInput}
            clearButtonMode="while-editing"
            onChangeText={setEmail}
            value={email}
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
              size={20}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.recoverTextsContainer}
          onPress={() => navigation.navigate("Recover")}
        >
          <Text style={styles.recoverTexts}>
            ¿Olvidaste tu contraseña?{" "}
            <Text style={{ fontWeight: "bold" }}>Recupérala</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginButtonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginText}>Iniciar Sesión</Text>
          )}
        </TouchableOpacity>
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
    fontSize: 18,
    padding: 2
  },
  mainTitleText: {
    fontSize: fontSizes * 1.5,
    alignSelf: "center",
  },
  inputsContainer: {
    gap: 10,
  },
  recoverTextsContainer: {
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
    borderColor: "orange",
borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "white",
    fontSize: 15,
  },
  passwordGeneralContainer: {
    flexDirection: "column",
    width: "100%",
  },
  passwordEye: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  loginButtonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#33658A",
    padding: 12,
    justifyContent:"center",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom:20
  },
  loginText: {
    color: "#fff",
    fontSize: fontSizes,
    fontWeight: "500",
  },
});