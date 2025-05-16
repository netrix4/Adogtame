import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";


type Animal = {
  nombre: string;
  edad: number;
  raza: string;
  foto_url: string;
  descripcion: string;
  tipo: string;
  tamaño: string;
  sexo: string;
};


export default function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <View style={styles.animalCard}>
      <Image source={{ uri: animal.foto_url }} style={styles.animalImage} resizeMode="cover"/>

      <View style={styles.animalQuickInfo}>
        <Text style={styles.quickInfoText}>Nombre: {animal.nombre}</Text>
        <Text style={styles.quickInfoText}>Tipo: {animal.tipo}</Text>
        <Text style={styles.quickInfoText}>Raza: {animal.raza}</Text>
        <Text style={styles.quickInfoText}>Sexo: {animal.sexo}</Text>
        <Text style={styles.quickInfoText}>Edad: {animal.edad}</Text>
        <Text style={styles.quickInfoText}>Tamaño: {animal.tamaño}</Text>
      </View>
    </View>
  );
}

const fontSizes = 16;

const styles = StyleSheet.create({
  animalCard: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#D9D9D9",
    padding: 10,
    gap: 10,
    alignItems: "center",
  },
  animalImage: {
    borderRadius: 15,
    width: 140,
    height: 140,
    backgroundColor: "#ccc",
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
