import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
  ActivityIndicator,
  useWindowDimensions,
  Modal,
} from "react-native";

import AnimalCard from "./AnimalCard";
import ListHeaderHome from "./ListHeaderHome";
import { useFiltroAnimales } from "../hooks/useFiltroAnimales";
import AnimalDetails from "./AnimalDetails";
import Animal from "../Interfaces/IAnimal";

export default function Home() {
  const [selectedTipo, setSelectedTipo] = useState("");
  const [selectedEdad, setSelectedEdad] = useState("");
  const [selectedTamano, setSelectedTamano] = useState("");

  const [isViewingDetails, setIsViewingDetails] = useState(false);
  const [detailingAnimal, setDetailingAnimal] = useState<Animal>({
    nombre: "",
    edad: 0,
    raza: "",
    foto_url: "",
    descripcion: "",
    tipo: "",
    tamaño: "",
    sexo: "",
  });

  const [filtros, setFiltros] = useState({});
  const { width, height } = useWindowDimensions();

  const onViewMorePress = (detalingAnimal: Animal) => {
    setDetailingAnimal(detalingAnimal);
    setIsViewingDetails(true);
  };

  const OnHideDetails = () => {
    setIsViewingDetails(false);
  };

  useEffect(() => {
    setFiltros({
      tipo: selectedTipo,
      edad: selectedEdad,
      tamaño: selectedTamano,
    });
  }, [selectedTipo, selectedEdad, selectedTamano]);

  const { animales, loading } = useFiltroAnimales(filtros);

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <>
          <FlatList
            style={[
              styles.mainContainer,
              { height: Platform.OS == "web" ? height * 0.92 : "100%" },
            ]}
            contentContainerStyle={styles.flatListContentStyle}
            ListHeaderComponent={
              <ListHeaderHome
                selectedTipo={selectedTipo}
                onTipoChange={setSelectedTipo}
                selectedEdad={selectedEdad}
                onEdadChange={setSelectedEdad}
                selectedTamano={selectedTamano}
                onTamanoChange={setSelectedTamano}
                setFiltros={setFiltros}
              />
            }
            data={animales}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <AnimalCard animal={item} onViewMore={onViewMorePress} />
            )}
          />
          <AnimalDetails
            isViewingDetails={isViewingDetails}
            detailingAnimal={detailingAnimal}
            // changeEditHandler={changeEditHandler}
            onHideDetails={OnHideDetails}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  flatListContentStyle: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingHorizontal: Platform.OS === "android" ? "5%" : "25%",
    marginTop: Platform.OS === "android" ? "10%" : "3%",
    paddingBottom: "1%",
  },
});
