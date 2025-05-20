import {
  StyleSheet,
  Image,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import IAnimalDetails from "../Interfaces/IAnimalDetails";

const AnimalDetails = ({
  isViewingDetails,
  detailingAnimal,
  changeEditHandler,
  onHideDetails,
}: IAnimalDetails) => {
  const { width, height } = useWindowDimensions();
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
            onPress={onHideDetails}
            style={styles.closeModalButton}
          >
            <Ionicons
              name="close-outline"
              size={fontSizes * 2}
              color={"#BDA45E"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("Agregar a favoritos");
            }}
          >
            <Ionicons
              name="heart-outline"
              size={fontSizes * 2}
              color={"#BDA45E"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const fontSizes = 20;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
  },
  modalOverlay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalMainContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "2%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 4,
    backgroundColor: "#F5F0E1",
    borderColor: "#C9B892",
    gap: "2%",
  },
  closeModalButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  animalDetailsTitle: {
    fontSize: fontSizes * 1.8,
    color: "#33658A",
  },
  animalDetailsText: {
    fontSize: fontSizes,
    textAlign: "center",
  },
  animalImage: {
    borderRadius: 15,
    width: "65%",
    height: "35%",
    maxWidth: 350,
    maxHeight: 350,
    // maxWidth: 200,
  },
});
export default AnimalDetails;
