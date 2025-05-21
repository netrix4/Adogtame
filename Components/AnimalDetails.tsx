import {
  StyleSheet,
  Image,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import IAnimalDetails from "../Interfaces/IAnimalDetails";
import { useFavorites } from "../contexts/FavoritesContext";

const AnimalDetails = ({
  isViewingDetails,
  detailingAnimal,
  onHideDetails,
}: IAnimalDetails) => {
  const { width, height } = useWindowDimensions()
  const { favorites, toggleFavorite } = useFavorites()

  const isFavorite = favorites.some(
    (animal) => animal.nombre === detailingAnimal.nombre
  );

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
              height: Platform.OS === "web" ? height * 0.75 : "90%",
              width: Platform.OS === "web" ? width * 0.6 : "100%",
            },
          ]}
        >
          <TouchableOpacity onPress={onHideDetails} style={styles.closeButton}>
            <Ionicons name="close-outline" size={fontSizes * 2} color="#BDA45E" />
          </TouchableOpacity>

          <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              Tiene {detailingAnimal.edad} años
            </Text>

            <Text style={styles.animalDetailsText}>
              {`Es un${detailingAnimal.sexo.toLowerCase() === "hembra" ? "a" : ""} ${detailingAnimal.tipo} ${detailingAnimal.raza} ${detailingAnimal.sexo}`.toLowerCase()}
            </Text>

            <Text style={styles.animalDetailsText}>
              {detailingAnimal.tamaño}
            </Text>

            {/* boton de corazon, cambia de color */}
            <TouchableOpacity
              onPress={() => toggleFavorite(detailingAnimal)}
              style={styles.favoriteButton}
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"} 
                size={fontSizes * 2}
                color={isFavorite ? "red" : "#BDA45E"} 
              />
            </TouchableOpacity>
          </ScrollView>
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
    backgroundColor: "#F5F0E1",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 4,
    borderColor: "#C9B892",
    padding: 20,
  },
  scrollContainer: {
    alignItems: "center",
    gap: 15,
    paddingBottom: 30,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
  },
  animalDetailsTitle: {
    fontSize: fontSizes * 1.8,
    color: "#33658A",
    textAlign: "center",
    marginBottom: 10,
  },
  animalDetailsText: {
    fontSize: fontSizes,
    textAlign: "center",
  },
  animalImage: {
    borderRadius: 15,
    width: "80%",
    height: 250,
    maxWidth: 350,
    marginVertical: 10,
  },
  favoriteButton: {
    marginTop: 15,
  },
});

export default AnimalDetails;
