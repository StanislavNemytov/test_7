import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const ButtonHeader = () => (
  <TouchableOpacity style={styles.btn} onPress={() => alert("Go to back")}>
    <Image source={require("../../../assets/icons/back.png")} style={styles.img} />
  </TouchableOpacity>
);

export default ButtonHeader;
