import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Darker shade of app bg (#171b2a) so fades don't flash white
const SCENE_BG = "#0f121c";

export function AnimatedTabScene({ children }) {
  const isFocused = useIsFocused();
  const progress = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isFocused ? 1 : 0, {
      duration: 220,
    });
  }, [isFocused, progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    flex: 1,
    opacity: progress.value,
    transform: [
      {
        translateY: (1 - progress.value) * 10,
      },
    ],
  }));

  return (
    <View style={styles.scene}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: SCENE_BG,
  },
});
