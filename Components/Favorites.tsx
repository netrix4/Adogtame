import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ListHeaderFavorites from "./ListHeaderFavorites";
import AnimalCard from "./AnimalCard";
import Animal from "../Interfaces/IAnimal";
import AnimalDetails from "./AnimalDetails";
import { useSolicitudes } from "../hooks/useSolicitudes";
import { useNavigation } from "@react-navigation/native";

export default function Resources() {
  const fixedAnimal: Animal = {
    id: "",
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
  const { solicitudes, getSolicitudesByLoggedUserId, userId } =
    useSolicitudes();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener("focus", () => {
      if (userId) {
        getSolicitudesByLoggedUserId(userId || "");
      }
    });
  }, [userId]);

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
      <FlatList
        style={[styles.scrollStyle]}
        contentContainerStyle={styles.flatListContentStyle}
        data={solicitudes}
        renderItem={({ item }) => {
          return (
            <AnimalCard
              hideShowMore={true}
              animal={item.animal}
              onViewMore={onViewMorePress}
            />
          );
        }}
      />
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
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: Platform.OS === "android" ? "5%" : "20%",
    paddingTop: Platform.OS === "android" ? "10%" : "4%",
    paddingBottom: "1%",
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
    fontWeight: "bold",
    marginBottom: 5,
  },
  textContentParagraph: {
    color: "#000",
    fontSize: fontSizes,
    textAlign: "justify",
    lineHeight: fontSizes * 1.4,
  },
});
