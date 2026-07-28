import { Tabs } from "expo-router";
import { Text } from "react-native";

import { AnimatedTabBarButton } from "../../components/AnimatedTabBarButton";
import { TabBarIcon } from "../../components/navigation/TabBarIcon";

const TabLabel = ({ label, color }) => (
  <Text style={{ color, fontSize: 12, fontWeight: "600" }}>{label}</Text>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#8a91a8",
        tabBarButton: (props) => <AnimatedTabBarButton {...props} />,
        sceneContainerStyle: {
          backgroundColor: "#0f121c",
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
        options={{
          title: "Progress",
          tabBarLabel: ({ color }) => <TabLabel label="Progress" color={color} />,
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
