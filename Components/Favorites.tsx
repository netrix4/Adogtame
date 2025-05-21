import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import ListHeaderFavorites from "./ListHeaderFavorites";
import AnimalCard from "./AnimalCard";
import AnimalDetails from "./AnimalDetails";
import { useFavorites } from "../contexts/FavoritesContext";
import IAnimal from "../Interfaces/IAnimal";

export default function Favorites() {
  const { width, height } = useWindowDimensions()
  const { favorites } = useFavorites()

  const [isViewingDetails, setIsViewingDetails] = useState(false)
  const [detailingAnimal, setDetailingAnimal] = useState<IAnimal | null>(null)

  const onViewMorePress = (animal: IAnimal) => {
    setDetailingAnimal(animal)
    setIsViewingDetails(true)
  };

  const onHideDetails = () => {
    setIsViewingDetails(false)
    setDetailingAnimal(null)
  };

  return (
    <View
      style={[
        styles.mainContainer,
        { height: Platform.OS === "web" ? height * 0.92 : "100%" },
      ]}
    >
      <ListHeaderFavorites />
      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>
          No hay animales favoritos aún 🐶
        </Text>
      ) : (
        <ScrollView
          style={styles.scrollStyle}
          contentContainerStyle={styles.flatListContentStyle}
        >
          {favorites.map((animal) => (
            <AnimalCard
              key={animal.id || animal.nombre} 
              animal={animal}
              onViewMore={onViewMorePress}
            />
          ))}
        </ScrollView>
      )}

      {detailingAnimal && (
        <AnimalDetails
          isViewingDetails={isViewingDetails}
          detailingAnimal={detailingAnimal}
          onHideDetails={onHideDetails}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F0E1",
  },
  scrollStyle: {
    paddingHorizontal: 10,
  },
  flatListContentStyle: {
    gap: 20,
    paddingBottom: 30,
    paddingTop: 10,
    alignItems: "center",
  },
  noFavoritesText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    color: "#888",
  },
});
