import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { AnimatedTabScene } from "../../components/AnimatedTabScene";
import { PageHeader } from "../../components/PageHeader";
import { useProgramSelection } from "../../context/ProgramSelectionContext";
import { convictConditioningPrograms } from "../../data/programs";

const SURFACE_COLOR = "#222842";
const SELECTED_COLOR = "#3d4a72";
const SPRING = { damping: 20, stiffness: 220, mass: 0.8 };

const ProgramCard = ({
  program,
  isSelected,
  isExpanded,
  onToggle,
  onSelect,
}) => {
  const selected = useSharedValue(isSelected ? 1 : 0);

  useEffect(() => {
    selected.value = withSpring(isSelected ? 1 : 0, SPRING);
  }, [isSelected, selected]);

  const cardStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      selected.value,
      [0, 1],
      [SURFACE_COLOR, SELECTED_COLOR]
    ),
    transform: [
      {
        scale: interpolate(selected.value, [0, 1], [1, 1.015]),
      },
    ],
  }));

  const tickStyle = useAnimatedStyle(() => ({
    opacity: interpolate(selected.value, [0, 0.4, 1], [0, 0.15, 0.3]),
    transform: [
      {
        scale: interpolate(selected.value, [0, 1], [0.55, 1]),
      },
      {
        translateX: interpolate(selected.value, [0, 1], [-12, 0]),
      },
      {
        translateY: interpolate(selected.value, [0, 1], [24, 0]),
      },
    ],
  }));

  const chooseButtonStyle = useAnimatedStyle(() => ({
    opacity: interpolate(selected.value, [0, 0.35], [1, 0]),
    maxHeight: interpolate(selected.value, [0, 1], [52, 0]),
    marginTop: interpolate(selected.value, [0, 1], [16, 0]),
    transform: [
      {
        translateY: interpolate(selected.value, [0, 1], [0, 8]),
      },
    ],
  }));

  return (
    <View className="mb-6">
      <Animated.View
        style={cardStyle}
        className="relative mb-3 overflow-hidden rounded-[5px] border border-app-border px-4 py-4"
      >
        <Animated.Text
          pointerEvents="none"
          style={[
            tickStyle,
            {
              position: "absolute",
              bottom: -32,
              left: 20,
              fontSize: 184,
              lineHeight: 184,
              fontWeight: "200",
              color: "#30c8f8",
            },
          ]}
        >
          ✓
        </Animated.Text>

        <View className="relative z-10">
          <Pressable onPress={onToggle}>
            <View className="mb-1 flex-row items-center justify-between">
              <Text className="text-lg font-bold text-white">{program.name}</Text>
              <Text className="text-[12px] font-semibold text-[#30c8f8]">
                {program.level}
              </Text>
            </View>
            <Text className="mb-2 text-[13px] text-[#aaa]">{program.caption}</Text>
            <Text className="text-[14px] leading-5 text-[#ccc]">
              {program.description}
            </Text>
            <Text className="mt-2 text-[12px] text-[#8a91a8]">
              {isExpanded ? "Tap to collapse schedule" : "Tap to view weekly schedule"}
            </Text>
          </Pressable>

          <Animated.View style={[chooseButtonStyle, { overflow: "hidden" }]}>
            <Pressable
              onPress={onSelect}
              disabled={isSelected}
              className="items-center rounded-[5px] border border-[#30c8f8] py-2.5"
            >
              <Text className="text-[13px] font-semibold text-[#30c8f8]">
                Choose program
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>

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
};

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

          {convictConditioningPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              isSelected={selectedProgramId === program.id}
              isExpanded={!!expandedPrograms[program.id]}
              onToggle={() => toggleProgram(program.id)}
              onSelect={() => selectProgram(program.id)}
            />
          ))}
        </ScrollView>
      </View>
    </AnimatedTabScene>
  );
};

export default ProgramsScreen;
