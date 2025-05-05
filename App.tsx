import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Profile from "./Screens/Profile";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerBlurEffect: "dark",
          headerTransparent: Platform.select({
            ios: true,
            web: true,
            android: false,
          }),
          headerTintColor: Platform.select({
            ios: "white",
            web: "white",
            android: "dark",
          }),
        }}
      >
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Profile" component={Profile} />
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
