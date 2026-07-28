import React from "react";
import { ScrollView, Text, View } from "react-native";

import { AnimatedTabScene } from "../../components/AnimatedTabScene";
import { sampleProgram } from "../../data/programs";

const ProgramsScreen = () => {
  return (
    <AnimatedTabScene>
      <View className="min-h-0 flex-1 bg-app-bg">
        <ScrollView className="flex-1 bg-app-bg px-5 pt-5">
          <Text className="mb-1 text-2xl font-bold text-white">
            {sampleProgram.name}
          </Text>
          <Text className="mb-3 text-[13px] text-[#aaa]">
            {sampleProgram.caption}
          </Text>
          <Text className="mb-6 text-[15px] leading-5 text-[#ccc]">
            {sampleProgram.description}
          </Text>

          {sampleProgram.days.map((day) => (
            <View key={day.id} className="mb-6">
              <Text className="mb-3 text-lg font-bold text-white">{day.name}</Text>
              {day.exercises.map((exercise) => (
                <View
                  key={exercise.name}
                  className="mb-2 flex-row items-center justify-between rounded-[5px] bg-app-surface px-3 py-2.5"
                >
                  <Text className="text-[15px] text-white">{exercise.name}</Text>
                  <Text className="text-[13px] text-[#aaa]">{exercise.sets}</Text>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </AnimatedTabScene>
  );
};

export default ProgramsScreen;
