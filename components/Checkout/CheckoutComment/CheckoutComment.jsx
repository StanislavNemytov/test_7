/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
import { baseStyle } from "../../../src/style/base";
import styles from "./styles";

const comment = require("../../../assets/icons/comment.png");

const CheckoutComment = () => {
  const [state, setState] = useState("Ваш комментарий к заказу...");
  const [placeholder, setPlaceholder] = useState(true);

  const handlerComment = () => {
    alert("Change text");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerComment}>
        <Image style={[styles.img, styles.avatar]} source={comment} />

        <Pressable onPress={handlerComment}>
          <Text style={[styles.text, placeholder && styles.placeholder]}>
            {state}
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={baseStyle.button}
        onPress={() => {
          alert("Select template");
        }}
      >
        <Text style={baseStyle.buttonText}>Стандартный комментарий</Text>
      </Pressable>
    </View>
  );
};

export default CheckoutComment;
