import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import styles from "./stylesCheckoutList";

const CheckoutList = (props) => {
  const onPress = (data) => {
    console.warn(JSON.stringify(data));
    alert("On press");
  };

  return (
    <FlatList
      style={styles.container}
      ItemSeparatorComponent={({ highlighted }) => (
        <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
      )}
      data={[
        { title: "Title Text", key: "item1" },
        { title: "Title Text", key: "item2" },
      ]}
      renderItem={({ item, _, separators }) => (
        <Pressable
          key={item.key}
          onPress={() => onPress(item)}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
        >
          <View style={{ backgroundColor: "white", padding: 20 }}>
            <Text>{item.title}</Text>
          </View>
        </Pressable>
      )}
    />
  );
};

export default CheckoutList;
