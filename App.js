import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { CheckoutList, Company, FooterNav, Header } from "./components";
import { baseStyle } from "./src/style/styleSheet";

export default function App() {
  return (
    <View style={baseStyle.scroll}>
      <Header />
      <View style={{ zIndex: 0, paddingTop: 72, position: "relative" }}>
        <CheckoutList />
        <Company />
      </View>

      <FooterNav />
      <StatusBar style="auto" />
    </View>
  );
}
