import React from "react";
import { View } from "react-native";
import ButtonHeader from "../Buttons/ButtonHeader/ButtonHeader";
import Title from "../Title/Title";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <ButtonHeader />
      <Title text="Оформление заказа" />
    </View>
  );
};

export default Header;
