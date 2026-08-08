import React from "react";
import { Text, View } from "react-native";

export function PageHeader({ title, subtitle }) {
  return (
    <View className="mb-6">
      <Text className="mb-1 text-2xl font-bold text-white">{title}</Text>
      {subtitle ? (
        <Text className="text-[15px] leading-5 text-[#ccc]">{subtitle}</Text>
      ) : null}
    </View>
  );
}
