/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");

const files = "jsx";
const names = ["CheckoutComment"];
const folder = "";
const startFolder = ["components", "layouts"];

const PATHS = {
  pages: path.join(__dirname, startFolder[0]),
};

function createFile(name, writeName = "component") {
  const write = {
    component: `import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
  
const ${name} = (props) => {
  return (
    <View style={styles.container}>
      <Text>${name}</Text>
    </View>
  );
};

export default ${name};
`,

    styles: `import { StyleSheet } from "react-native";
import { baseStyle, colors } from "../../src/style/base";

const styles${name} = StyleSheet.create({
  container:{}
});

export default styles${name};
`,

    layout: `import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import styles from "./styles";

const Stack = createStackNavigator();

const ${name}Screen = () => (
  <Stack.Navigator initialRouteName="${name}">
    <Stack.Screen
      name="${name}"
      component={<Text>${name}</Text>}
      options={{
        title: "${name}",
        ...styles,
      }}
    />
  </Stack.Navigator>
);

export default ${name}Screen;
`,
  };

  const folderName = folder ? folder + name : name;
  const plusFolder = writeName !== "layout" ? `/${folderName}` : "";
  const linkToFolder = `${PATHS.pages}${plusFolder}`;

  if (!fs.existsSync(linkToFolder)) {
    fs.mkdirSync(linkToFolder);
  }

  let fileName = writeName === "styles" ? "styles" : name;
  if (writeName === "layout") {
    fileName = `${name}Screen`;
  }
  const data = write[writeName];
  const filePath = `${linkToFolder}/${fileName}.${files}`;

  fs.appendFile(filePath, data, () => {
    const str = `File "${fileName}.${files}" was created in folder "${linkToFolder}"`;
    // eslint-disable-next-line no-console
    console.log(str);
  });
}

// Create
names.forEach(async (name) => {
  await createFile(name);
  await createFile(name, "styles");
  // await createFile(name, "layout");
});

// Remove
// names.forEach((name) => {
//   const linkToFolder = `${PATHS.pages}/${name}`;
//   fs.unlink(`${linkToFolder}/${name}.${files}`, () => {});
// });
