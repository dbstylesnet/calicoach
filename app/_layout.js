import "../global.css";

import { Slot } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <SafeAreaProvider>
      <View className="min-h-screen flex-1 bg-app-bg">
        <SafeAreaView edges={["top"]} className="bg-app-bg">
          <View className="h-[120px] items-center justify-center border-b border-app-border px-4">
            <Image
              source={require("../assets/images/logo.png")}
              className="h-full w-full max-h-[100px] max-w-[280px]"
              resizeMode="contain"
            />
          </View>
        </SafeAreaView>
        <View className="h-[80vh] min-h-0">
          <Slot />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Layout;
