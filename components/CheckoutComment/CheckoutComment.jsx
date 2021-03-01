/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { colors } from "../../src/style/base";
import styles from "./styles";

const comment = require("../../assets/icons/comment.png");

const CheckoutComment = () => {
  const [state, setState] = useState("Ваш комментарий к заказу...");
  const [placeholder, setPlaceholder] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.containerComment}>
        <Image style={[styles.img, styles.avatar]} source={comment} />

        <Text
          style={[styles.text, placeholder && { color: colors.placeholder }]}
        >
          {state}
        </Text>
      </View>
      <Button
        title="Стандартный комментарий"
        onPress={() => {
          alert("Select template");
        }}
      />
    </View>
  );
};

export default CheckoutComment;
