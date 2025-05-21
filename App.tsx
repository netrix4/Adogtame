import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Platform, StatusBar } from "react-native";
import { useEffect } from "react";
import { Linking } from "react-native";

import Login from "./Screens/Login";
import DashBoard from "./Screens/DashBoard";
import RecoverPass from "./Screens/RecoverPass";
import Register from "./Screens/Register";
import AuthGate from "./Components/AuthGate";
import NotFoundScreen from "./Screens/NotFoundScreen";
import ResetPassword from "./Screens/RessetPassword";

import { FavoritesProvider } from "./contexts/FavoritesContext"; 

export default function App() {
  const Stack = createNativeStackNavigator();

  const linking = {
     // prefixes: ["http://localhost:8081", "https://tusitio.com"],
      prefixes: ["http://localhost:8081"],

    config: {
      screens: {
        Home: "",
        Login: "login",
        Recover: "recover",
        ResetPassword: "reset-password", // <-- esta línea nueva
        Register: "register",
        DashBoard: "dashboard",
        NotFound: "*",
      },
    },
  };

  useEffect(() => {
    Linking.getInitialURL().then((url) => {
      console.log("App opened with URL:", url);
    });
  }, []);

  return (
    <FavoritesProvider>
      <NavigationContainer linking={linking}>
        <StatusBar />
        <Stack.Navigator
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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Recover" component={RecoverPass} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
          <Stack.Screen name="DashBoard">
            {() => (
              <AuthGate>
                <DashBoard />
              </AuthGate>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
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
