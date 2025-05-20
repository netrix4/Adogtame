import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import ListHeaderFavorites from "./ListHeaderFavorites";
import AnimalCard from "./AnimalCard";
import Animal from "../Interfaces/IAnimal";
import AnimalDetails from "./AnimalDetails";

export default function Resources() {
  const fixedAnimal: Animal = {
    nombre: "Firulais",
    edad: 99,
    raza: "De todas",
    foto_url:
      "https://veras.mx/wp-content/uploads/2024/08/Perrito-hizo-el-drama-del-dia.jpg",
    descripcion: "Animalito con mucho carino",
    tipo: "Perro",
    tamaño: "Pequeno",
    sexo: "Hembra",
  };
  const { width, height } = useWindowDimensions();
  const [isViewingDetails, setIsViewingDetails] = useState(false);
  const [detailingAnimal, setDetailingAnimal] = useState<Animal>(fixedAnimal);

  const onViewMorePress = (detailingAnimal: Animal) => {
    setDetailingAnimal(detailingAnimal);
    setIsViewingDetails(true);
  };

  const OnHideDetails = () => {
    setIsViewingDetails(false);
  };

  return (
    <View
      style={[
        styles.mainContainer,
        { height: Platform.OS == "web" ? height * 0.92 : "100%" },
      ]}
    >
      <ListHeaderFavorites />
      <ScrollView
        style={[styles.scrollStyle]}
        contentContainerStyle={styles.flatListContentStyle}
      >
        <AnimalCard
          animal={fixedAnimal}
          onViewMore={onViewMorePress}
        ></AnimalCard>
        <AnimalCard
          animal={fixedAnimal}
          onViewMore={onViewMorePress}
        ></AnimalCard>
        <AnimalCard
          animal={fixedAnimal}
          onViewMore={onViewMorePress}
        ></AnimalCard>
        <AnimalCard
          animal={fixedAnimal}
          onViewMore={onViewMorePress}
        ></AnimalCard>
      </ScrollView>
      <AnimalDetails
        isViewingDetails={isViewingDetails}
        detailingAnimal={detailingAnimal}
        onHideDetails={OnHideDetails}
      />
    </View>
  );
}
const fontSizes = 20;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: Platform.OS === "android" ? "5%" : "25%",
    paddingTop: Platform.OS === "android" ? "10%" : "3%",
    paddingBottom: "1%",
    gap: "5%",
  },
  scrollStyle: {},
  flatListContentStyle: {
    paddingHorizontal: 22,
    display: "flex",
    flexDirection: "column",
    // width: "100%",
    marginBottom: "5%",
    gap: "2%",
  },
  textContentTitle: {
    color: "#33658A",
    fontSize: fontSizes * 1.3,
  },
  textContentParagraph: {
    color: "#000",
    fontSize: fontSizes,
    textAlign: "justify",
  },
});
