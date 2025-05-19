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
        <Text style={styles.quickInfoText}>Nombre: {animal.nombre}</Text>
        <Text style={styles.quickInfoText}>Tipo: {animal.tipo}</Text>
        <Text style={styles.quickInfoText}>Raza: {animal.raza}</Text>
        <Text style={styles.quickInfoText}>Sexo: {animal.sexo}</Text>
        <Text style={styles.quickInfoText}>Edad: {animal.edad}</Text>
        <Text style={styles.quickInfoText}>Tamaño: {animal.tamaño}</Text>
        <TouchableOpacity onPress={onViewMoreDetails}>
          <Text style={styles.watchMoreText}>Ver mas</Text>
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
    padding: 10,
    gap: 10,
    alignItems: "center",
  },
  animalImage: {
    borderRadius: 15,

    width: "25%",
    maxWidth: 100,
    height: "100%",
    alignSelf: "flex-start",
  },
  animalQuickInfo: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  quickInfoText: {
    fontWeight: "bold",
    fontSize: fontSizes,
    marginBottom: 2,
  },
  watchMoreContainer: {
    padding: 15,
    justifyContent: "flex-end",
  },
  watchMoreText: {
    color: "#33658A",
    fontSize: fontSizes,
  },
});
