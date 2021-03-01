import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";

const Recipes = () => (
  <View style={styles.container}>
    <TextInput placeholder="Имя и фамилия" />
  </View>
);

export default Recipes;
