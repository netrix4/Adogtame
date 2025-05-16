import React, { useEffect, useState } from "react";
import {Text, StyleSheet, View, SafeAreaView, FlatList, Platform, ActivityIndicator,} from "react-native";
import AnimalCard from "./AnimalCard";
import ListHeaderHome from "./ListHeaderHome";
import { useFiltroAnimales } from "../hooks/useFiltroAnimales";

export default function Home() {
  const [selectedTipo, setSelectedTipo] = useState("");
  const [selectedEdad, setSelectedEdad] = useState("");
  const [selectedTamano, setSelectedTamano] = useState("");
  
  const [filtros, setFiltros] = useState({});

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
          style={styles.mainContainer}
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
  },
  flatListContentStyle: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingHorizontal: "5%",
    marginTop: Platform.OS === "ios" ? "3%" : "10%",
    paddingBottom: Platform.OS === "ios" ? "15%" : "28%",
  },
});
