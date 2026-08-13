import React from "react";
import { Text, View } from "react-native";

export function PageHeader({ title, subtitle }) {
  return (
    <View className="mb-6">
      <View className="mb-2 self-start border-b-2 border-[#30c8f8] pb-2">
        <Text className="text-[30px] font-bold tracking-wide text-app-title">
          {title}
        </Text>
      </View>
      {subtitle ? (
        <Text className="text-[15px] leading-5 text-[#b0b6c6]">{subtitle}</Text>
      ) : null}
    </View>
  );
}
