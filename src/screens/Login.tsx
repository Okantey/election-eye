import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Text } from "react-native";
import { styles } from "../constants/styles.global";

const Login: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;
