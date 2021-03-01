import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const Stack = createStackNavigator();

const AccountScreen = () => (
  <Stack.Navigator initialRouteName="Account">
    <Stack.Screen
      name="Account"
      component={() => <Text>Account</Text>}
      options={{
        title: "Account",
        ...styles,
      }}
    />
  </Stack.Navigator>
);

export default AccountScreen;
