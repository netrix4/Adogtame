import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Components/Profile";
import Favorites from "../Components/Favorites";
import Home from "../Components/Home";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function DashBoard() {
  const IsSelectedTabBarIcon = ({ iconName, isFocused }: any) => {
    if (!isFocused) {
      return (
        // /**the not selected component*/
        <Ionicons name={iconName} color={"#33658A"} size={iconSizes} />
      );
    } else {
      // the selected icon component
      return (
        <View style={styles.selectedIcon}>
          <Ionicons name={iconName} color={"#E6D8B7"} size={iconSizes} />
        </View>
      );
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarPosAbsolute,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <IsSelectedTabBarIcon iconName="home-outline" isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <IsSelectedTabBarIcon
              iconName="heart-outline"
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <IsSelectedTabBarIcon
              iconName="person-outline"
              isFocused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const iconSizes = 30;

const styles = StyleSheet.create({
  tabBarPosAbsolute: {
    // paddingTop: "2%",
    display: "flex",
    flexDirection: "row",
    height: "8%",
    backgroundColor: "#E6D8B7",
  },
  selectedIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33658A",
    borderRadius: iconSizes * 0.3,
    width: iconSizes * 1.2,
    height: iconSizes * 1.2,
  },
});
