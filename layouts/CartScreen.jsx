import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const Stack = createStackNavigator();

const CartScreen = () => (
  <Stack.Navigator initialRouteName="Cart">
    <Stack.Screen
      name="Cart"
      component={() => <Text>Cart</Text>}
      options={{
        title: "Cart",
        ...styles,
      }}
    />
  </Stack.Navigator>
);

export default CartScreen;
