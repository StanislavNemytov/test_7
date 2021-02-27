import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./stylesCompany";

const Company = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainerShadow}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/image/default-image-avatar.png")}
          />
        </View>
      </View>
      <Text style={styles.name}>Название компании</Text>
    </View>
  );
};

export default Company;
