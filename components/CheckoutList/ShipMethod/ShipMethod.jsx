import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const point = require("../../../assets/icons/point.png");

const ShipMethod = () => {
  return (
    <View style={styles.container}>
      <Image style={[styles.img, styles.avatar]} source={point} />

      <Text style={styles.text}>Выбрать способ доставки</Text>
    </View>
  );
};

export default ShipMethod;
