import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { AnimatedTabScene } from "../../components/AnimatedTabScene";
import { PageHeader } from "../../components/PageHeader";
import { useProgramSelection } from "../../context/ProgramSelectionContext";
import { convictConditioningPrograms } from "../../data/programs";

const ProgramsScreen = () => {
  const {
    selectedProgramId,
    selectProgram,
    showProgramSelectionNotice,
    dismissProgramSelectionNotice,
  } = useProgramSelection();
  const [expandedPrograms, setExpandedPrograms] = useState({});

  const toggleProgram = (programId) => {
    setExpandedPrograms((prev) => ({
      ...prev,
      [programId]: !prev[programId],
    }));
  };

  return (
    <AnimatedTabScene>
      <View className="min-h-0 flex-1 bg-app-bg">
        <ScrollView className="flex-1 bg-app-bg px-5 pt-5">
          <PageHeader
            title="Programs"
            subtitle="Pick one Convict Conditioning program — New Blood, Good Behavior, or Veterano."
          />

          {showProgramSelectionNotice ? (
            <View className="mb-4 rounded-[5px] border border-[#30c8f8] bg-[#1a3040] px-4 py-3">
              <View className="flex-row items-start justify-between">
                <Text className="mr-3 flex-1 text-[14px] font-semibold text-[#30c8f8]">
                  Choose type of training
                </Text>
                <Pressable onPress={dismissProgramSelectionNotice} className="py-0.5">
                  <Text className="text-[13px] text-[#8a91a8]">Dismiss</Text>
                </Pressable>
              </View>
              <Text className="mt-1 text-[13px] leading-5 text-[#ccc]">
                Select a program below before you continue to Training.
              </Text>
            </View>
          ) : null}

          {convictConditioningPrograms.map((program) => {
            const isExpanded = !!expandedPrograms[program.id];
            const isSelected = selectedProgramId === program.id;

            return (
              <View key={program.id} className="mb-6">
                <View
                  className={`relative mb-3 overflow-hidden rounded-[5px] border border-app-border px-4 py-4 ${
                    isSelected ? "bg-[#3d4a72]" : "bg-app-surface"
                  }`}
                >
                  {isSelected ? (
                    <Text
                      pointerEvents="none"
                      className="absolute -bottom-8 left-5 text-[#30c8f8] opacity-30"
                      style={{ fontSize: 184, lineHeight: 184, fontWeight: "200" }}
                    >
                      ✓
                    </Text>
                  ) : null}

                  <View className="relative z-10">
                  <Pressable onPress={() => toggleProgram(program.id)}>
                    <View className="mb-1 flex-row items-center justify-between">
                      <Text className="text-lg font-bold text-white">
                        {program.name}
                      </Text>
                      <Text className="text-[12px] font-semibold text-[#30c8f8]">
                        {program.level}
                      </Text>
                    </View>
                    <Text className="mb-2 text-[13px] text-[#aaa]">
                      {program.caption}
                    </Text>
                    <Text className="text-[14px] leading-5 text-[#ccc]">
                      {program.description}
                    </Text>
                    <Text className="mt-2 text-[12px] text-[#8a91a8]">
                      {isExpanded ? "Tap to collapse schedule" : "Tap to view weekly schedule"}
                    </Text>
                  </Pressable>

                  {!isSelected ? (
                    <Pressable
                      onPress={() => selectProgram(program.id)}
                      className="mt-4 items-center rounded-[5px] border border-[#30c8f8] py-2.5"
                    >
                      <Text className="text-[13px] font-semibold text-[#30c8f8]">
                        Choose program
                      </Text>
                    </Pressable>
                  ) : null}
                  </View>
                </View>

                {isExpanded &&
                  program.weeks.map((week) => (
                    <View key={week.id} className="mb-4 ml-1">
                      <Text className="mb-3 text-[15px] font-semibold text-white">
                        {week.name}
                      </Text>

                      {week.days.map((day) => (
                        <View
                          key={`${week.id}-${day.label}`}
                          className="mb-2 rounded-[5px] bg-app-surface px-3 py-2.5"
                        >
                          <Text
                            className={`text-[14px] font-semibold ${
                              day.rest ? "text-[#666]" : "text-white"
                            }`}
                          >
                            {day.label}
                            {day.rest ? " — Rest" : ""}
                          </Text>

                          {!day.rest &&
                            day.exercises.map((exercise) => (
                              <View key={exercise.name} className="mt-2">
                                <View className="flex-row items-center justify-between">
                                  <Text className="text-[14px] font-medium text-white">
                                    {exercise.name}
                                  </Text>
                                  <Text className="text-[12px] text-[#aaa]">
                                    {exercise.workSets}
                                  </Text>
                                </View>
                                <Text className="mt-0.5 text-[12px] text-[#8a91a8]">
                                  {exercise.caption}
                                </Text>
                              </View>
                            ))}
                        </View>
                      ))}
                    </View>
                  ))}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </AnimatedTabScene>
  );
};

export default ProgramsScreen;
