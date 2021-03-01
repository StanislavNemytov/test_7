/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const home = require("../../../assets/icons/home.png");
const account = require("../../../assets/icons/account.png");
const cart = require("../../../assets/icons/cart.png");
const info = require("../../../assets/icons/info.png");
const chat = require("../../../assets/icons/chat.png");

const ButtonFooter = ({ icon }) => {
  const images = { home, account, cart, info, chat };
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => alert(`Press on "${icon}"`)}
    >
      <Image source={images[icon]} style={styles.img} />
    </TouchableOpacity>
  );
};

export default ButtonFooter;
