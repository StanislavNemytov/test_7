/* eslint-disable no-alert */
import React from "react";
import { Pressable, Text, View } from "react-native";
import { baseStyle } from "../../../src/style/base";
import styles from "./styles";

const CheckoutTotal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>132 000 Р</Text>
      </View>
      {/* <Button title="Оформить заказ" /> */}
      <Pressable
        style={baseStyle.button}
        onPress={() => {
          alert("Оформить заказ");
        }}
      >
        <Text style={baseStyle.buttonText}>Оформить заказ</Text>
      </Pressable>
    </View>
  );
};

export default CheckoutTotal;
