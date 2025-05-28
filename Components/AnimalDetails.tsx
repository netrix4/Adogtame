import {
  StyleSheet,
  Image,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import IAnimalDetails from "../Interfaces/IAnimalDetails";
import { useSolicitudes } from "../hooks/useSolicitudes";
import { setSolicitudByLoggedUserId } from "../api/solicitudes";
import { useProfileData } from "../hooks/useProfileData";

const AnimalDetails = ({
  isViewingDetails,
  detailingAnimal,
  changeEditHandler,
  onHideDetails,
}: IAnimalDetails) => {
  const { userMetaData, error } = useProfileData();
  const { width, height } = useWindowDimensions();
  const [loadingSolicitud, setLoadingSolicitud] = useState(false);

  const handleHideModal = () => {
    onHideDetails();
  };

  return (
    <Modal visible={isViewingDetails} transparent animationType="slide">
      <View
        style={[
          styles.modalOverlay,
          {
            height: Platform.OS === "web" ? height : "100%",
          },
        ]}
      >
        <View
          style={[
            styles.modalMainContent,
            {
              height: Platform.OS === "web" ? height * 0.75 : "100%",
              width: Platform.OS === "web" ? width * 0.6 : "100%",
            },
          ]}
        >
          <Text style={styles.animalDetailsTitle}>
            {detailingAnimal.nombre}
          </Text>
          <Image
            source={{ uri: detailingAnimal.foto_url }}
            style={styles.animalImage}
            resizeMode="cover"
          />
          <Text style={styles.animalDetailsText}>
            {detailingAnimal.descripcion}
          </Text>
          <Text style={styles.animalDetailsText}>
            Tiene {detailingAnimal.edad} añotes de edad
          </Text>
          <Text style={styles.animalDetailsText}>
            {"E" +
              `s un${
                detailingAnimal.sexo.toLowerCase() == "hembra" ? "a" : ""
              } ${detailingAnimal.tipo} ${detailingAnimal.raza} ${
                detailingAnimal.sexo
              }`.toLowerCase()}
          </Text>
          <Text style={styles.animalDetailsText}>{detailingAnimal.tamaño}</Text>
          <TouchableOpacity
            onPress={handleHideModal}
            style={styles.closeModalButton}
          >
            <Ionicons
              name="close-outline"
              size={fontSizes * 2}
              color={"#BDA45E"}
            />
          </TouchableOpacity>
          <View style={styles.buttonNavigationContainer}>
            <TouchableOpacity
              onPress={() => {
                setLoadingSolicitud(true);
                setSolicitudByLoggedUserId(
                  detailingAnimal,
                  userMetaData?.sub as string
                );
                setLoadingSolicitud(false);
                handleHideModal();
              }}
              style={styles.loginButton}
            >
              {loadingSolicitud ? (
                <ActivityIndicator size="small" />
              ) : (
                <>
                  <Text style={styles.loginText}>Solcitar adopcion</Text>
                  <Ionicons
                    name="heart-outline"
                    size={fontSizes * 2}
                    color={"#F5F0E1"}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const fontSizes = 20;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalMainContent: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "2%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 3,
    backgroundColor: "#F5F0E1",
    borderColor: "#C9B892",
    gap: "2%",
  },
  closeModalButton: {
    position: "absolute",
    right: 12,
    top: 12,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 50,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  animalDetailsTitle: {
    fontSize: fontSizes * 1.6,
    color: "#33658A",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  animalDetailsText: {
    fontSize: fontSizes * 0.95,
    textAlign: "center",
    color: "#444",
    marginVertical: 2,
  },
  animalImage: {
    borderRadius: 15,
    width: "80%",
    height: 230,
    maxWidth: 320,
    marginVertical: 10,
    // maxWidth: 200,
  },
  loginButton: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#C9B892",
    // width: "50%",
    paddingHorizontal: 10,
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
  buttonNavigationContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AnimalDetails;
