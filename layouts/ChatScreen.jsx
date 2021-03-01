import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import styles from "./styles";

const Stack = createStackNavigator();

const ChatScreen = () => (
  <Stack.Navigator initialRouteName="Chat">
    <Stack.Screen
      name="Chat"
      component={() => <Text>Chat</Text>}
      options={{
        title: "Chat",
        ...styles,
      }}
    />
  </Stack.Navigator>
);

export default ChatScreen;
