import { useRef } from "react";
import { Tabs } from "expo-router";
import { Text } from "react-native";

import { AnimatedTabBarButton } from "../../components/AnimatedTabBarButton";
import { TabBarIcon } from "../../components/navigation/TabBarIcon";
import { setTabSlideDirection } from "../../lib/tabTransition";

const TabLabel = ({ label, color }) => (
  <Text style={{ color, fontSize: 12, fontWeight: "600" }}>{label}</Text>
);

const TabsLayout = () => {
  const previousIndex = useRef(0);

  const onTabPress = (index) => () => {
    if (index === previousIndex.current) return;
    setTabSlideDirection(index > previousIndex.current ? 1 : -1);
  };

  return (
    <Tabs
      lazy={false}
      screenListeners={{
        state: (event) => {
          const state = event.data?.state;
          if (!state) return;

          const nextIndex = state.index;
          if (nextIndex === previousIndex.current) return;

          setTabSlideDirection(nextIndex > previousIndex.current ? 1 : -1);
          previousIndex.current = nextIndex;
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#8a91a8",
        tabBarButton: (props) => <AnimatedTabBarButton {...props} />,
        sceneContainerStyle: {
          backgroundColor: "#171b2a",
        },
        tabBarStyle: {
          backgroundColor: "#171b2a",
          borderTopColor: "#2a3045",
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        listeners={{ tabPress: onTabPress(0) }}
        options={{
          title: "Exercises",
          tabBarLabel: ({ color }) => <TabLabel label="Exercises" color={color} />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "barbell" : "barbell-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="programs"
        listeners={{ tabPress: onTabPress(1) }}
        options={{
          title: "Programs",
          tabBarLabel: ({ color }) => <TabLabel label="Programs" color={color} />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calendar" : "calendar-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        listeners={{ tabPress: onTabPress(2) }}
        options={{
          title: "Training",
          tabBarLabel: ({ color }) => <TabLabel label="Training" color={color} />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "checkmark-circle" : "checkmark-circle-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        listeners={{ tabPress: onTabPress(3) }}
        options={{
          title: "History",
          tabBarLabel: ({ color }) => <TabLabel label="History" color={color} />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "time" : "time-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
