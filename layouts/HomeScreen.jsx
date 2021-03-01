import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native";
import { Checkout, Recipes } from "../components";
import styles from "./styles";

const Stack = createStackNavigator();

const onPress = (navigation) => {
  navigation.navigate("Checkout");
};

const screens = {
  Checkout: { component: Checkout, title: "Оформление заказа" },
  Recipes: { component: Recipes, title: "Получатель" },
};

const HomeScreen = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={({ navigation }) => (
        <Button onPress={() => onPress(navigation)} title="Click" />
      )}
      options={{
        title: "Home",
        ...styles,
        headerTitleStyle: { alignSelf: "center" },
      }}
    />
    {Object.entries(screens).map(([name, { component, title }]) => (
      <Stack.Screen
        name={name}
        component={component}
        key={name}
        options={{
          title,
          ...styles,
        }}
      />
    ))}
  </Stack.Navigator>
);

export default HomeScreen;
