/* eslint-disable react/prop-types */
import React from "react";
import { FlatList, Pressable } from "react-native";
import Separator from "./Separator/Separator";
import styles from "./styles";
import UserData from "./UserData/UserData";

const CheckoutList = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("Recipes", { name: "Jane" });
    // console.warn(JSON.stringify(data.key));
  };

  return (
    <FlatList
      style={styles.container}
      ItemSeparatorComponent={() => <Separator />}
      data={[
        {
          Component: UserData,
          key: "item-1",
          press: (data) => onPress(data),
        },
      ]}
      renderItem={({ item, separators }) => {
        const { Component, key, press } = item;

        return (
          <Pressable
            key={key}
            onPress={() => press(item)}
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
