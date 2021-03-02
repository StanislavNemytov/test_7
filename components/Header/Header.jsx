/* eslint-disable react/prop-types */
import { useTheme } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../Title/Title";
import styles from "./styles";

const Header = (props) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <HeaderBackButton
        onPress={() => navigation.goBack()}
        tintColor={theme.colors.background}
      />
      <Title text="Оформление заказа" />
    </View>
  );
};

export default Header;
