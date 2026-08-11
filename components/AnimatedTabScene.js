import React, { useEffect, useRef } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import { getTabSlideDirection } from "../lib/tabTransition";

const DURATION = 280;
const APP_BG = "#171b2a";

export function AnimatedTabScene({ children }) {
  const isFocused = useIsFocused();
  const { width } = useWindowDimensions();
  const skipNextEnter = useRef(isFocused);
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    if (isFocused) {
      if (skipNextEnter.current) {
        skipNextEnter.current = false;
        translateX.value = 0;
        opacity.value = 1;
        return;
      }

      const direction = getTabSlideDirection();
      translateX.value = direction * width;
      opacity.value = 1;
      translateX.value = withTiming(0, {
        duration: DURATION,
        easing: Easing.out(Easing.cubic),
      });
      return;
    }

    const direction = getTabSlideDirection();
    // Stay opaque while sliding off so navy covers any gap (no white flash)
    opacity.value = 1;
    translateX.value = withTiming(-direction * width, {
      duration: DURATION,
      easing: Easing.out(Easing.cubic),
    });
    opacity.value = withDelay(DURATION, withTiming(0, { duration: 1 }));
  }, [isFocused, opacity, translateX, width]);

  const animatedStyle = useAnimatedStyle(() => ({
    flex: 1,
    backgroundColor: APP_BG,
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
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
    backgroundColor: APP_BG,
    overflow: "hidden",
  },
});
