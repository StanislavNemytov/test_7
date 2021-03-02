/* eslint-disable react/prop-types */
import React from "react";
import { Animated } from "react-native";
import { useCollapsibleHeader } from "react-navigation-collapsible";
import { colors } from "../../src/style/base";
import CheckoutList from "../Checkout/CheckoutList/CheckoutList";

const HeaderScroll = ({ navigation }) => {
  const options = {
    config: {
      collapsedColor: colors.primary /* Optional */,
      // useNativeDriver: true /* Optional, default: true */,
      elevation: 2 /* Optional */,
    },
  };
  const {
    onScroll,
    containerPaddingTop,
    scrollIndicatorInsetTop,
  } = useCollapsibleHeader(options);

  const data = new Array(6).fill("CheckoutList");
  const components = { CheckoutList };

  const renderData = ({ item }) => {
    const Component = components[item];
    return <Component key={item} navigation={navigation} />;
  };

  return (
    <Animated.FlatList
      onScroll={onScroll}
      contentContainerStyle={{ paddingTop: containerPaddingTop }}
      scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
      data={data}
      renderItem={renderData}
    />
  );
};

export default HeaderScroll;
