/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";
import CheckoutComment from "../CheckoutComment/CheckoutComment";
import CheckoutList from "../CheckoutList/CheckoutList";
import styles from "./styles";

const Checkout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CheckoutList navigation={navigation} />
      <CheckoutComment navigation={navigation} />
    </View>
  );
};

export default Checkout;
