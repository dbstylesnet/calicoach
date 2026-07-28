import { PlatformPressable } from "@react-navigation/elements";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export function AnimatedTabBarButton({
  children,
  onPress,
  onLongPress,
  accessibilityState,
  style,
  href,
  ...rest
}) {
  const focused = accessibilityState?.selected;
  const scale = useSharedValue(focused ? 1 : 0.92);
  const opacity = useSharedValue(focused ? 1 : 0.7);

  useEffect(() => {
    scale.value = withSpring(focused ? 1 : 0.92, {
      damping: 14,
      stiffness: 180,
    });
    opacity.value = withSpring(focused ? 1 : 0.7, {
      damping: 16,
      stiffness: 160,
    });
  }, [focused, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const button = (
    <PlatformPressable
      {...rest}
      accessibilityState={accessibilityState}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.button, style]}
    >
      <Animated.View style={[styles.content, animatedStyle]}>
        {children}
      </Animated.View>
    </PlatformPressable>
  );

  if (href) {
    return (
      <Link href={href} asChild>
        {button}
      </Link>
    );
  }

  return button;
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
