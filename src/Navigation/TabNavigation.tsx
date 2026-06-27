import { createBottomTabNavigator } from "expo-router/build/react-navigation/bottom-tabs";

import Score from "@/components/Score";
import Supplies from "@/components/Supplies";
import Termial from "../components/Terminal";
import charater from "../components/character";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingRight: 250, paddingLeft: 250 },
      }}
    >
      <Tab.Screen
        name="Terminal"
        component={Termial}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Operators"
        component={charater}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Score"
        component={Score}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Supplies"
        component={Supplies}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
