import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import WarningScreen from "./src/screens/WarningScreen";
import SettingScreen from "./src/screens/SettingScreen";
import PlanningScreen from "./src/screens/PlanningScreen";


import { RootStackParamList } from "./src/navigation/types";

enableScreens(true);

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
          options={({ route }) => ({
            title: route.params?.name
              ? `${route.params.name}'s Profile`
              : "Profile",
          })
      }
        />
        <Stack.Screen name="Warning" component={WarningScreen}           options={{ headerShown: false }}
/>
        <Stack.Screen name="Setting" component={SettingScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Planning" component={PlanningScreen}options={{ headerShown: false }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}