import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
import * as Font from "expo-font";

const Layout = () => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      regular: require("../assets/fonts/Cabin-Regular.ttf"),
      medium: require("../assets/fonts/Cabin-Medium.ttf"),
      bold: require("../assets/fonts/Cabin-Bold.ttf"),
    });

    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);
  return (
    fontsLoaded && (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    )
  );
};

export default Layout;
