import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Components/Profile";
import Favorites from "../Components/Favorites";
import Home from "../Components/Home";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function DashBoard() {
  const iconSizes = 30;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarPosAbsolute,
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={1000}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" color={"#33658A"} size={iconSizes} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: () => (
            <Ionicons name="heart-outline" color={"#33658A"} size={iconSizes} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="person-outline"
              color={"#33658A"}
              size={iconSizes}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarPosAbsolute: {
    position: "absolute",
    backgroundColor: "#F28C28",
  },
});
