import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  import { supabase } from "../lib/supabase"; // Ajusta la ruta si tu archivo es distinto
  import adogtameIcon from "../assets/Original.jpg";
  import { useNavigation } from "@react-navigation/native";
  import { useEffect } from 'react';
  import { Linking } from 'react-native';


  const fontSizes = 20;
  
  export default function RecoverEmailScreen() {
    const [email, setEmail] = useState("");
    const navigation = useNavigation(); 

    const handleRecoverPassword = async () => {
      if (!email) {
        Alert.alert("Error", "Por favor ingresa tu correo electrónico");
        return;
      }
  
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:8081/reset-password',
      });

      useEffect(() => {
        Linking.getInitialURL().then(url => {
          console.log("RecoverPass opened with URL:", url);
        });
      }, []);
      
  
      if (error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert(
          "Revisa tu correo",
          "Si el correo existe, te enviamos un enlace de recuperación",
          [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate("Login" as never); // ← Login
              },
            },
          ]
        );
      }
    };
  
    return (
      <View style={styles.mainContainer}>
        <Image style={styles.mainImage} source={adogtameIcon} />
        <Text style={styles.mainTitleText}>Recuperar contraseña 🐶</Text>
  
        <View style={styles.inputsContainer}>
          <Text style={styles.texts}>Correo electrónico</Text>
          <TextInput
            placeholder="ejemplo@email.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            style={styles.emailInput}
          />
  
          <TouchableOpacity style={styles.recoverButton} onPress={handleRecoverPassword}>
            <Text style={styles.recoverText}>Enviar enlace</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      width: "65%",
      gap: 20,
    },
    mainImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      alignSelf: "center",
    },
    mainTitleText: {
      fontSize: fontSizes * 1.4,
      alignSelf: "center",
      textAlign: "center",
    },
    inputsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 15,
    },
    texts: {
      fontSize: fontSizes,
    },
    emailInput: {
      borderColor: "orange",
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      backgroundColor: "white",
      fontSize: fontSizes,
    },
    recoverButton: {
      backgroundColor: "#33658A",
      paddingVertical: 10,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
    },
    recoverText: {
      fontSize: fontSizes,
      color: "white",
    },
  });
  