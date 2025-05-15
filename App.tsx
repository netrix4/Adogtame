import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Platform, StatusBar } from "react-native";
import Login from "./Screens/Login";
import DashBoard from "./Screens/DashBoard";
import RecoverPass from "./Screens/RecoverPass";
import Register from "./Screens/Register";
import AuthGate from "./Components/AuthGate";
import NotFoundScreen from "./Screens/NotFoundScreen";

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
        Register: "register",
        DashBoard: "dashboard",
        NotFound: "*",
      },
    },
  };

  return (
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
        <Stack.Screen name="Recover" component={RecoverPass} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DashBoard">
          {() => (
            <AuthGate>
              <DashBoard />
            </AuthGate>
          )}
        </Stack.Screen>
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
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
