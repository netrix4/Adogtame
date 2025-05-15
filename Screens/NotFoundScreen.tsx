import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  View,
} from "react-native";
import EasterEgg from "../assets/EasterEgg.jpg";
import React from "react";

const NotFoundScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView>
      <View
        style={[
          styles.mainContianer,
          { height: Platform.OS == "web" ? height : "100%" },
        ]}
      >
        <Image source={EasterEgg} style={styles.easterEggImage} />
        <Text>NotFoundScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  mainContianer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  easterEggImage: {
    height: 400,
    width: 400,
  },
});
