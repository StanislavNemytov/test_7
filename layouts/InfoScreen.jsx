import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import styles from "./styles";

const Stack = createStackNavigator();

const InfoScreen = () => (
  <Stack.Navigator initialRouteName="Info">
    <Stack.Screen
      name="Info"
      component={() => <Text>Info</Text>}
      options={{
        title: "Info",
        ...styles,
      }}
    />
  </Stack.Navigator>
);

export default InfoScreen;
