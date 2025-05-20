import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import logo from "../assets/Logo.svg";

type Props = {
  selectedTipo: string;
  onTipoChange: (tipo: string) => void;
  selectedEdad: string;
  onEdadChange: (edad: string) => void;
  selectedTamano: string;
  onTamanoChange: (tamano: string) => void;
  setFiltros: React.Dispatch<React.SetStateAction<{}>>;
};

const ListHeaderHome = ({
  selectedTipo,
  onTipoChange,
  selectedEdad,
  onEdadChange,
  selectedTamano,
  onTamanoChange,
  setFiltros,
}: Props) => {
  const handleLimpiarFiltros = () => {
    onTipoChange("");
    onEdadChange("");
    onTamanoChange("");
    setFiltros({});
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.mainTitleContainer}>
        <Image source={logo} style={styles.adogtameImg} />
        <Text style={styles.adogtameTitle}>Adogtame 🐾</Text>
      </View>

      <Filtro
        label="Tipo"
        selectedValue={selectedTipo}
        onValueChange={onTipoChange}
        options={[
          { label: "Todos", value: "" },
          { label: "Perro", value: "Perro" },
          { label: "Gato", value: "Gato" },
        ]}
      />

      <Filtro
        label="Edad"
        selectedValue={selectedEdad}
        onValueChange={onEdadChange}
        options={[
          { label: "Todas", value: "" },
          { label: "1 a 2 años", value: "1-2" },
          { label: "2 a 4 años", value: "2-4" },
          { label: "5 o más", value: "5+" },
        ]}
      />

      <Filtro
        label="Tamaño"
        selectedValue={selectedTamano}
        onValueChange={onTamanoChange}
        options={[
          { label: "Todos", value: "" },
          { label: "Pequeño", value: "Pequeño" },
          { label: "Mediano", value: "Mediano" },
          { label: "Grande", value: "Grande" },
        ]}
      />

      <Pressable style={styles.filterButton} onPress={handleLimpiarFiltros}>
        <Text style={styles.filterButtonText}>Limpiar</Text>
      </Pressable>
    </View>
  );
};

export default ListHeaderHome;

const Filtro = ({
  label,
  selectedValue,
  onValueChange,
  options,
}: {
  label: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: { label: string; value: string }[];
}) => (
  <View style={styles.pickerContainer}>
    <Text style={styles.pickerLabel}>{label}:</Text>
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      style={styles.picker}
    >
      {options.map((opt) => (
        <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
      ))}
    </Picker>
  </View>
);

const fontSizes = 20;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingBottom: 10,
  },
  mainTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  adogtameImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  adogtameTitle: {
    fontSize: fontSizes * 1.7,
  },
  pickerContainer: {
    marginHorizontal: 10,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  filterButton: {
    backgroundColor: "#C9B892",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  filterButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
