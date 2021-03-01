import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const card = require("../../../assets/icons/card.png");

const Payment = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={card} />

      <View style={styles.cardDataWrapper}>
        <Text style={styles.cardTitle}>Банковская карта</Text>
        <Text style={styles.cardNumber}>VISA ****7812</Text>
      </View>
    </View>
  );
};

export default Payment;
