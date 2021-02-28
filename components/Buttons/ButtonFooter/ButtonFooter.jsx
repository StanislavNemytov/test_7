import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const ButtonFooter = ({ icon }) => {
  const images = {
    home:     require("../../../assets/icons/home.png"),
    account:  require("../../../assets/icons/account.png"),
    cart:     require("../../../assets/icons/cart.png"),
    info:     require("../../../assets/icons/info.png"),
    chat:     require("../../../assets/icons/chat.png"),
  };
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
