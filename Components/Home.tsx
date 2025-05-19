import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";

import AnimalCard from "./AnimalCard";
import ListHeaderHome from "./ListHeaderHome";
import { useFiltroAnimales } from "../hooks/useFiltroAnimales";

export default function Home() {
  const [selectedTipo, setSelectedTipo] = useState("");
  const [selectedEdad, setSelectedEdad] = useState("");
  const [selectedTamano, setSelectedTamano] = useState("");

  const [filtros, setFiltros] = useState({});
  const { width, height } = useWindowDimensions();

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
          renderItem={({ item }) => <AnimalCard animal={item} />}
        />
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
