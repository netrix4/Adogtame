import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Components/Profile";
import Home from "../Components/Home";
import { Ionicons } from "@expo/vector-icons";

import React from "react";

export default function CustomTabBar() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.mainContainer}>
      {/* <Text>CustomTabBar</Text> */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Ionicons name="home" color={"purple"} size={25} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" color={"purple"} size={25} />
          ),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "red",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
