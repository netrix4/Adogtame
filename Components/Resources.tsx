import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import ListHeaderResources from "./ListHeaderResources";

export default function Resources() {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={[
        styles.mainContainer,
        { height: Platform.OS == "web" ? height * 0.92 : "100%" },
      ]}
    >
      <ListHeaderResources></ListHeaderResources>
      <ScrollView
        style={[
          styles.scrollStyle,
          //   { height: Platform.OS == "web" ? height : "100%" },
        ]}
        contentContainerStyle={styles.flatListContentStyle}
      >
        <Text style={styles.textContentTitle}>
          Guia Para Adoptantes{"\n\n"}
        </Text>
        <Text style={styles.textContentParagraph}>
          Antes de adoptar, asegurate de tener el tiempo, espacio y compromiso
          para brindar un hogar responsable y permanente. Recuerda: adoptar es
          para toda la vida{"\n\n"}
        </Text>
        <Text style={[styles.textContentParagraph, { fontWeight: "bold" }]}>
          Consejos Rápidos:
        </Text>
        <Text style={styles.textContentParagraph}>
          &bull; Acondiciona tu casa con cama, platos y juguetes.{"\n"}
          &bull; Presenta la mascota lentamente a otros animales o personas
          {"\n"}
          &bull; Sé paciente: los primeros días de adptación.{"\n\n"}
        </Text>
        <Text style={styles.textContentTitle}>
          Requisitos Legales y Proceso:{"\n\n"}
        </Text>
        <Text style={styles.textContentParagraph}>
          &bull; INE o identificación oficial {"\n"}
          &bull; Comprobante de domicilio{"\n"}
          &bull; Firma de carta compromiso {"\n"}
          &bull; Esterilización ($435 mxn){"\n"}
          &bull; Llenado de formulario de adopción{"\n\n"}
        </Text>
        <Text style={styles.textContentTitle}>
          Cuidados Médicos Básicos{"\n\n"}
        </Text>
        <Text style={styles.textContentParagraph}>
          Tu mascota necesitará atención médica regular para estar sana.{"\n"}
        </Text>

        <Text style={[styles.textContentParagraph, { fontWeight: "bold" }]}>
          Lo escencial:
        </Text>
        <Text style={styles.textContentParagraph}>
          &bull; Vacunas {"\n"}
          &bull; Desparacitación {"\n"}
          &bull; Esterilización {"\n"}
          &bull; Visitas al veterinario {"\n\n"}
        </Text>
        <Text style={styles.textContentTitle}>
          Bienestar y Enriquecimiento{"\n\n"}
        </Text>
        <Text style={styles.textContentParagraph}>
          Una mascota feliz es una mascota activa, amada y estimulada.{"\n"}
        </Text>
        <Text style={[styles.textContentParagraph, { fontWeight: "bold" }]}>
          Tips:
        </Text>
        <Text style={styles.textContentParagraph}>
          &bull; Paseos diarios y juegos intractivos {"\n"}
          &bull; Rascadores o pelotas para gatos {"\n"}
          &bull; Rutinas de alimentación {"\n"}
          &bull; No grites ni castigues: usa refuerzo positivo {"\n"}
        </Text>
      </ScrollView>
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
    marginBottom: "5%",
    // height:'100%'
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
