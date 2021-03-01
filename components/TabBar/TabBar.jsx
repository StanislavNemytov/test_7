/* eslint-disable react/prop-types */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { Account, Cart, Chat, Home, Info } from "../../layouts";
import styles from "./styles";

const home = require("../../assets/icons/home@2x.png");
const account = require("../../assets/icons/account.png");
const cart = require("../../assets/icons/cart.png");
const info = require("../../assets/icons/info.png");
const chat = require("../../assets/icons/chat.png");

const Tab = createBottomTabNavigator();
const images = { home, account, cart, info, chat };
const userScreens = { Home, Info, Chat, Cart, Account };

const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Checkout"
        tabBarOptions={{ showLabel: false }}
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return (
              <Image
                source={images[route.name.toLowerCase()]}
                style={styles.img}
              />
            );
          },
        })}
      >
        {Object.entries(userScreens).map(([name, component]) => (
          <Tab.Screen name={name} component={component} key={name} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBar;
