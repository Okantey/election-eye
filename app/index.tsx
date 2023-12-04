import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../constants/styles.global";
import { StatusBar } from "expo-status-bar";
import { Image, Text } from "react-native";
import { images } from "../constants/images.global";
import { colors } from "../constants/colors.global";

const Welcome: React.FC = () => {
  const router = useRouter();
  const render = () => {
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };
  useEffect(() => {
    render();
  });
  return (
    <SafeAreaView style={styles.splashView}>
      <StatusBar style="light" />
      <Image
        source={images.logo}
        style={{ width: 200, height: 120, objectFit: "cover" }}
      />
      <Text style={{ color: "white", fontSize: 40, fontFamily: "bold" }}>
        Election Eye
      </Text>
    </SafeAreaView>
  );
};

export default Welcome;
