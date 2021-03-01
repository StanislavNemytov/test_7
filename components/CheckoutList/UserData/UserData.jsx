import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const avatar = require("../../../assets/icons/user.png");
const attention = require("../../../assets/icons/attention.png");

const UserData = () => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.img, styles.avatar]}
        source={avatar}
      />

      <View style={styles.userDataWrapper}>
        <Text style={styles.username}>Имя Фамилия</Text>
        <Text style={styles.userData}>email@gmail.com, +7 (999) 999-99-99</Text>
      </View>

      <Image
        style={[styles.img, styles.attention]}
        source={attention}
      />
    </View>
  );
};

export default UserData;
