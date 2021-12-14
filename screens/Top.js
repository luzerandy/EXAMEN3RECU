import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Constants from 'expo-constants';
import Today from "./Today";
import Random from "./Random";
import Quotes from "./Quotes";


const Tab = createMaterialTopTabNavigator();
export default function Top() {
  return (
    <Tab.Navigator
      initialRouteName="Today"
      tabBarOptions={{
        activeTintColor: "#d534eb",
        inactiveTintColor: "#f6c2fc",
        showLabel: true,
        labelStyle: {
          fontSize: 12
        },
        style: {
          paddingTop: Constants.statusBarHeight,
          paddingBottom: 5,
          backgroundColor: "#f3f3f1"
        }
      }

      }
    >
      <Tab.Screen
        name="Today"
        component={Today}
        options={{
          headerShown: false,
          tabBarLabel: "Today",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"book"} size={20} color={color} />
          )
        }}

      />
      <Tab.Screen
        name="Random"
        component={Random}
        options={{
          headerShown: false,
          tabBarLabel: "Random",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"book"} size={20} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Quotes"
        component={Quotes}
        options={{
          headerShown: false,
          tabBarLabel: "Quotes",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"book"} size={20} color={color} />
          )
        }}
      />

    </Tab.Navigator>
  )
}
