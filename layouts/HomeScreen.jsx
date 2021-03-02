/* eslint-disable react/prop-types */
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native";
import { Checkout, HeaderScroll, Recipes } from "../components";
import styles from "./styles";

const Stack = createStackNavigator();

const onPress = (navigation) => {
  navigation.navigate("Checkout");
};

const screens = {
  Checkout: { component: Checkout, title: "Оформление заказа" },
  Recipes: { component: Recipes, title: "Получатель" },
  HeaderScroll: { component: HeaderScroll, title: "HeaderScroll" },
};

const ToCheckout = ({ navigation }) => (
  <Button onPress={() => onPress(navigation)} title="Click" />
);

const HomeScreen = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={ToCheckout}
      options={{
        title: "Home",
        ...styles,
        headerTitleStyle: { alignSelf: "center" },
      }}
    />
    {Object.entries(screens).map(([name, { component, title }]) => {
      const options = {
        title,
        ...styles,
        headerTitleStyle: { alignSelf: "center" },
      };
      const isCheckout = name.toLowerCase() === "checkout";

      if (isCheckout) {
        options.header = () => null;
      }

      return (
        <Stack.Screen
          name={name}
          component={component}
          key={name}
          options={{ ...options }}
        />
      );
    })}
  </Stack.Navigator>
);

export default HomeScreen;
