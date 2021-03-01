import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button, Text } from "react-native";
import { CheckoutList } from "../components";
import styles from "./styles";

const Stack = createStackNavigator();

const onPress = (navigation) => {
  navigation.navigate("CheckoutList");
};

const Recipes = () => <Text>Recipes</Text>;

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
    <Stack.Screen
      name="CheckoutList"
      component={CheckoutList}
      options={{
        title: "Оформление заказа",
        ...styles,
      }}
    />
    <Stack.Screen
      name="Recipes"
      component={Recipes}
      options={{
        title: "Получатель",
        ...styles,
      }}
    />
  </Stack.Navigator>
);

export default HomeScreen;
