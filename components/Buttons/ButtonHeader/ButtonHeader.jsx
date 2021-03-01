import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const ButtonHeader = ({ navigation }) => (
  <TouchableOpacity
    style={styles.btn}
    onPress={() => {
      console.warn(JSON.stringify(navigation));
    }}
  >
    <Image
      source={require("../../../assets/icons/back.png")}
      style={styles.img}
    />
  </TouchableOpacity>
);

export default ButtonHeader;
