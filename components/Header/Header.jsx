/* eslint-disable react/prop-types */
import { useTheme } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../Title/Title";
import styles from "./styles";

const Header = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const canGoBack = navigation.canGoBack();

  return (
    <View
      style={[
        styles.header,
        { paddingTop: insets.top },
        canGoBack && styles.withBack,
      ]}
    >
      {canGoBack && (
        <HeaderBackButton
          onPress={() => navigation.goBack()}
          tintColor={theme.colors.background}
          style={{ marginLeft: 0 }}
        />
      )}
      <Title text="Оформление заказа" />
    </View>
  );
};

export default Header;
