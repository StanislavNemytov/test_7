/* eslint-disable react/prop-types */
import React from "react";
import { FlatList, Pressable } from "react-native";
import Payment from "./Payment/Payment";
import Separator from "./Separator/Separator";
import ShipMethod from "./ShipMethod/ShipMethod";
import styles from "./styles";
import UserData from "./UserData/UserData";

const CheckoutList = ({ navigation }) => {
  const onPress = (navigateTo) => {
    navigation.navigate(navigateTo);
  };

  return (
    <FlatList
      style={styles.container}
      ItemSeparatorComponent={() => <Separator />}
      data={[
        {
          Component: UserData,
          key: "item-1",
          navigateTo: "Recipes",
        },
        {
          Component: ShipMethod,
          key: "item-2",
          navigateTo: "Recipes",
        },
        {
          Component: Payment,
          key: "item-3",
          navigateTo: "Recipes",
        },
      ]}
      renderItem={({ item, separators }) => {
        const { Component, key, navigateTo } = item;

        return (
          <Pressable
            key={key}
            onPress={() => onPress(navigateTo)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <Component />
          </Pressable>
        );
      }}
    />
  );
};

export default CheckoutList;
