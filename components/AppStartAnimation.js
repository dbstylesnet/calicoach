import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HEADER_HEIGHT = 120;
const FINAL_LOGO_HEIGHT = 100;
const FINAL_LOGO_WIDTH = 280;
const START_LOGO_HEIGHT = 200;
const START_LOGO_WIDTH = 420;
const FADE_MS = 500;
const HOLD_MS = 1000;
const MOVE_MS = 750;
const APP_BG = "#171b2a";

const logoSource = require("../assets/images/logo.png");

export function AppStartAnimation({ children }) {
  const insets = useSafeAreaInsets();
  const [clientReady, setClientReady] = useState(false);
  const hasAnimated = useRef(false);

  const { height: screenH, width: screenW } = Dimensions.get("window");

  const logoOpacity = useSharedValue(0);
  const logoTop = useSharedValue(0);
  const logoLeft = useSharedValue(0);
  const logoWidth = useSharedValue(START_LOGO_WIDTH);
  const logoHeight = useSharedValue(START_LOGO_HEIGHT);
  const contentTranslateY = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  useEffect(() => {
    setClientReady(true);
  }, []);

  useEffect(() => {
    if (!clientReady || hasAnimated.current) return;
    hasAnimated.current = true;

    const finalTop = insets.top + (HEADER_HEIGHT - FINAL_LOGO_HEIGHT) / 2;
    const finalLeft = (screenW - FINAL_LOGO_WIDTH) / 2;
    const startTop = (screenH - START_LOGO_HEIGHT) / 2;
    const startLeft = (screenW - START_LOGO_WIDTH) / 2;

    logoTop.value = startTop;
    logoLeft.value = startLeft;
    logoWidth.value = START_LOGO_WIDTH;
    logoHeight.value = START_LOGO_HEIGHT;
    logoOpacity.value = 0;
    contentTranslateY.value = Math.min(screenH * 0.55, 420);
    contentOpacity.value = 0;

    logoOpacity.value = withTiming(1, {
      duration: FADE_MS,
      easing: Easing.out(Easing.cubic),
    });

    const moveDelay = FADE_MS + HOLD_MS;
    const moveConfig = {
      duration: MOVE_MS,
      easing: Easing.inOut(Easing.cubic),
    };

    logoTop.value = withDelay(moveDelay, withTiming(finalTop, moveConfig));
    logoLeft.value = withDelay(moveDelay, withTiming(finalLeft, moveConfig));
    logoWidth.value = withDelay(
      moveDelay,
      withTiming(FINAL_LOGO_WIDTH, moveConfig)
    );
    logoHeight.value = withDelay(
      moveDelay,
      withTiming(FINAL_LOGO_HEIGHT, moveConfig)
    );
    contentTranslateY.value = withDelay(moveDelay, withTiming(0, moveConfig));
    contentOpacity.value = withDelay(
      moveDelay,
      withTiming(1, {
        duration: MOVE_MS * 0.85,
        easing: Easing.out(Easing.cubic),
      })
    );
  }, [
    clientReady,
    contentOpacity,
    contentTranslateY,
    insets.top,
    logoHeight,
    logoLeft,
    logoOpacity,
    logoTop,
    logoWidth,
    screenH,
    screenW,
  ]);

  const logoStyle = useAnimatedStyle(() => ({
    position: "absolute",
    top: logoTop.value,
    left: logoLeft.value,
    width: logoWidth.value,
    height: logoHeight.value,
    opacity: logoOpacity.value,
    zIndex: 20,
  }));

  const contentStyle = useAnimatedStyle(() => ({
    flex: 1,
    opacity: contentOpacity.value,
    transform: [{ translateY: contentTranslateY.value }],
  }));

  if (!clientReady) {
    return (
      <View style={styles.root}>
        <View style={{ paddingTop: insets.top }}>
          <View style={styles.header}>
            <Image
              source={logoSource}
              style={styles.finalLogo}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.content}>{children}</View>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Animated.View style={contentStyle}>
        <View style={{ paddingTop: insets.top }}>
          <View style={styles.header}>
            <View style={styles.finalLogo} />
          </View>
        </View>
        <View style={styles.content}>{children}</View>
      </Animated.View>

      <Animated.Image
        source={logoSource}
        style={logoStyle}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: APP_BG,
    overflow: "hidden",
  },
  header: {
    height: HEADER_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#2a3045",
    paddingHorizontal: 16,
  },
  finalLogo: {
    height: FINAL_LOGO_HEIGHT,
    width: FINAL_LOGO_WIDTH,
    maxHeight: FINAL_LOGO_HEIGHT,
    maxWidth: FINAL_LOGO_WIDTH,
  },
  content: {
    flex: 1,
    minHeight: 0,
  },
});
