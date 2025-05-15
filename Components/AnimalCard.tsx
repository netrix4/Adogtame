import {StyleSheet,Text, Image, View, TouchableOpacity,} from "react-native";
import React from "react";

type Animal = {
  nombre: string;
  edad: number;
  raza: string;
  foto_url: string;
  descripcion: string;
  tipo: string;
  tamaño: string;
};

export default function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <View style={styles.animalCard}>
      <View style={styles.animalQuickInfo}>
        <Text style={styles.quickInfoText}>Nombre: {animal.nombre}</Text>
        <Text style={styles.quickInfoText}>Tipo: {animal.tipo}</Text>
        <Text style={styles.quickInfoText}>Raza: {animal.raza}</Text>
        <Text style={styles.quickInfoText}>Edad: {animal.edad}</Text>
        <Text style={styles.quickInfoText}>Tamano: {animal.tamaño}</Text>
        <Text style={styles.quickInfoText}>Descripcion: {animal.descripcion}</Text>

      </View>
      <View style={styles.watchMoreContainer}>
        <TouchableOpacity>
          <Text style={styles.watchMoreText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const fontSizes = 16;
const styles = StyleSheet.create({
  animalCard: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // height: ,
    justifyContent: "space-evenly",
    borderRadius: 15,
    backgroundColor: "#D9D9D9",
    padding: 5,
  },
  animalImage: {
    borderRadius: 15,
    width: "25%",
    height: "100%",
  },
  animalQuickInfo: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    padding: 15,
  },
  quickInfoText: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: fontSizes,
  },
  watchMoreContainer: {
    padding: 15,
    display: "flex",
    flexDirection: "column-reverse",
    width: "25%",
  },
  watchMoreText: {
    color: "#33658A",
    fontSize: fontSizes,
  },
});

