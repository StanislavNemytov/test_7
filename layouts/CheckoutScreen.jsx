import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import styles from "./styles";
import { CheckoutList } from "../components";

const Stack = createStackNavigator();

const CheckoutScreen = () => (
  <Stack.Navigator initialRouteName="Checkout">
    <Stack.Screen
      name="Checkout"
      component={CheckoutList}
      options={{
        title: "Оформление заказа",
        // ...styles,
      }}
    />
    <Stack.Screen
      name="Recipes"
      component={<Text>This is `&apos`s profile</Text>}
      options={{
        title: "Получатель",
        ...styles,
        // headerLeft: (props) => <ButtonHeader {...props} />,
      }}
    />
  </Stack.Navigator>
);

export default CheckoutScreen;
