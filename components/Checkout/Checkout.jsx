import React from "react";
import { View } from "react-native";
import CheckoutList from "../CheckoutList/CheckoutList";
import styles from "./styles";

const Checkout = () => {
  return (
    <View style={styles.container}>
      <CheckoutList />
      {/* <CheckoutComment /> */}
    </View>
  );
};

export default Checkout;
