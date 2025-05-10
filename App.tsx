import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Platform, StatusBar } from "react-native";
import Login from "./Screens/Login";
import DashBoard from "./Screens/DashBoard";
import RecoverPass from "./Screens/RecoverPass";
import Register from "./Screens/Register";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar />
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
        <stack.Screen name="Recover" component={RecoverPass} />
        <stack.Screen name="Register" component={Register} />
        <stack.Screen name="DashBoard" component={DashBoard} />
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
