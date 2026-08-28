import "../global.css";

import { Slot } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppStartAnimation } from "../components/AppStartAnimation";
import { ExerciseProgressProvider } from "../context/ExerciseProgressContext";
import { WorkoutHistoryProvider } from "../context/WorkoutHistoryContext";

const Layout = () => {
  return (
    <SafeAreaProvider>
      <ExerciseProgressProvider>
        <WorkoutHistoryProvider>
          <View className="min-h-screen flex-1 bg-app-bg">
            <AppStartAnimation>
              <Slot />
            </AppStartAnimation>
          </View>
        </WorkoutHistoryProvider>
      </ExerciseProgressProvider>
    </SafeAreaProvider>
  );
};

export default Layout;
