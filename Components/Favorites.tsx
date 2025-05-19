import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

export default function Favorites() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView>
      <View
        style={[
          styles.mainContainer,
          { height: Platform.OS === "web" ? height : "100%" },
        ]}
      >
        <Text>Favorites</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
