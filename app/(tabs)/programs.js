import React from "react";
import { ScrollView, Text, View } from "react-native";

const sampleProgram = {
  name: "Beginner Strength Path",
  caption: "3 days per week · 4 weeks",
  description:
    "A simple full-body progression using early steps from each movement family. Rest at least one day between sessions.",
  days: [
    {
      name: "Day A — Push & Core",
      exercises: [
        { name: "Incline Pushup", sets: "3 × 8–12" },
        { name: "Jackknife Squat", sets: "3 × 8–12" },
        { name: "Knee Tucks", sets: "3 × 10–15" },
        { name: "Short Bridge", sets: "3 × 10–15" },
      ],
    },
    {
      name: "Day B — Pull & Shoulders",
      exercises: [
        { name: "Horizontal Pull", sets: "3 × 6–10" },
        { name: "Supported Squat", sets: "3 × 8–12" },
        { name: "Flat Knee Raise", sets: "3 × 8–12" },
        { name: "Wall Headstand hold", sets: "3 × 20–40s" },
      ],
    },
    {
      name: "Day C — Full Body",
      exercises: [
        { name: "Kneeling Pushup", sets: "3 × 8–12" },
        { name: "Jackknife Pull", sets: "3 × 5–8" },
        { name: "Straight Bridge", sets: "3 × 8–12" },
        { name: "Crow Stand practice", sets: "5 × 10–20s" },
      ],
    },
  ],
};

const ProgramsScreen = () => {
  return (
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
          <View key={day.name} className="mb-6">
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
  );
};

export default ProgramsScreen;
