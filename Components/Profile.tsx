import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from "../lib/supabase";
import { CommonActions, useNavigation } from "@react-navigation/native";
import logo from "../assets/Logo.svg";
import { useProfileData } from "../hooks/useProfileData";

export default function Profile() {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  const { userMetaData, error, loading } = useProfileData();

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut({ scope: "global" });
    if (error) {
      Alert.alert("Error al cerrar sesión", error.message);
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      );
    }
  };
  return (
    <SafeAreaView>
      <View
        style={[
          styles.mainContainer,
          { height: Platform.OS != "web" ? "100%" : height * 0.92 },
        ]}
      >
        <View style={styles.profileFieldsCotianer}>
          <View style={styles.profilePhotoContainer}>
            <Image
              source={logo}
              style={styles.profilePhotoImage}
              alt="No Photo"
            />
          </View>
          <View style={styles.blankFiled}>
            <Text style={styles.profileDataField}>
              {loading ? "Loading..." : userMetaData?.nombre}
            </Text>
          </View>
          <View style={styles.blankFiled}>
            <Text style={styles.profileDataField}>
              {loading ? "Loading..." : userMetaData?.telefono}
            </Text>
          </View>
          <View style={styles.blankFiled}>
            <Text style={styles.profileDataField}>
              {loading ? "Loading..." : userMetaData?.email}
            </Text>
          </View>
          <View style={styles.blankFiled}>
            <Text style={styles.profileDataField}>
              {loading ? "Loading..." : userMetaData?.direccion}
            </Text>
          </View>

          <View style={styles.logoutButtonContainer}>
            <TouchableOpacity
              onPress={handleLogOut}
              style={styles.logoutButton}
            >
              <Text style={styles.logoutText}>Cerrar Sesión </Text>
              <Ionicons
                name="log-out-outline"
                size={fontSizes}
                color={"#000"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const fontSizes = 20;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //Ojo con esto
    // marginTop: Platform.OS === "ios" ? "3%" : "10%",
    // paddingBottom: Platform.OS === "ios" ? "15%" : "28%",
    marginTop: Platform.OS === "android" ? "10%" : "3%",
    paddingBottom: Platform.OS === "android" ? "15%" : "10%",
    paddingHorizontal: Platform.OS === "android" ? "5%" : "25%",
  },
  profileFieldsCotianer: {
    // marginTop: "10%",
    flexDirection: "column",
    width: "100%",
    gap: 15,
    alignSelf: "center",
  },
  profilePhotoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    padding: 5,
    backgroundColor: "#D9D9D9",
    borderRadius: 12,
  },
  blankFiled: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    height: 50,
    width: "100%",
  },

  profilePhotoImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  profileDataField: {
    fontSize: fontSizes,
  },
  logoutButtonContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoutButton: {
    flexDirection: "row",
    backgroundColor: "#C9B892",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  logoutText: {
    fontSize: fontSizes * 0.95,
    color: "#000",
    fontWeight: "600"
  },
});
