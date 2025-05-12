import {
  StyleSheet,
  Text,
  Image,
  View,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import pedillosImg from"../assets/pedillos.jpg";

// export default function AnimalCard({ nombre, edad, raza, imagen }: any) {
export default function AnimalCard() {
  return (
    <View style={styles.animalCard}>
      <Image source={pedillosImg} style={styles.animalImage}></Image>
      <View style={styles.animalQuickInfo}>
        <Text style={styles.quickInfoText}>Nombre: Pp</Text>
        <Text style={styles.quickInfoText}>Edad:87</Text>
        <Text style={styles.quickInfoText}>Raza:Todas</Text>
      </View>
      <View style={styles.watchMoreContainer}>
        <TouchableOpacity>
          <Text style={styles.watchMoreText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const fontSizes = 20;
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
