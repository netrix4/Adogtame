import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import IAnimalCardProps from "../Interfaces/IAnimalCardProps";

export default function AnimalCard({ animal, onViewMore }: IAnimalCardProps) {
  const onViewMoreDetails = () => {
    onViewMore(animal);
  };
  return (
    <View style={styles.animalCard}>
      <Image
        source={{ uri: animal.foto_url }}
        style={styles.animalImage}
        resizeMode="cover"
      />

      <View style={styles.animalQuickInfo}>
        <Text style={styles.animalName}>{animal.nombre}</Text>
        <Text style={styles.quickInfoText}>Tipo: {animal.tipo}</Text>
        <Text style={styles.quickInfoText}>Raza: {animal.raza}</Text>
        <Text style={styles.quickInfoText}>Sexo: {animal.sexo}</Text>
        <Text style={styles.quickInfoText}>Edad: {animal.edad}</Text>
        <Text style={styles.quickInfoText}>Tamaño: {animal.tamaño}</Text>
        <TouchableOpacity onPress={onViewMoreDetails}>
          <Text style={styles.watchMoreText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const fontSizes = 20;

const styles = StyleSheet.create({
  animalCard: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#F5F0E1",
    borderColor: "#C9B892",
    borderWidth: 1,
    padding: 12,
    gap: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  animalImage: {
    borderRadius: 12,
    width: "28%",
    maxWidth: 100,
    height: "100%",
    alignSelf: "flex-start",
  },
  animalQuickInfo: {
    flex: 1,
    flexDirection: "column",
    gap: 2
  },
  animalName: {
    fontSize: fontSizes + 2,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  quickInfoText: {
   // fontWeight: "bold",
    fontSize: fontSizes * 0.9,
    marginBottom: 2,
    color: "#444"
  },
  watchMoreContainer: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#33658A",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  watchMoreText: {
    color: "#33658A",
    fontSize: fontSizes * 0.85, 
    fontWeight: "500",
  },
});
