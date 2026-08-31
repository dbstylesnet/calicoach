import React, { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { AnimatedTabScene } from "../../components/AnimatedTabScene";
import { PageHeader } from "../../components/PageHeader";
import { useExerciseProgress } from "../../context/ExerciseProgressContext";
import { useWorkoutHistory } from "../../context/WorkoutHistoryContext";
import { fullTrainingSession } from "../../data/programs";
import {
  FAMILY_TO_CHAIN,
  formatStandard,
  getChainByFamilyName,
  getLevelLabel,
} from "../../lib/exerciseProgress";

const ProgressScreen = () => {
  const { addWorkout } = useWorkoutHistory();
  const { getChainProgress } = useExerciseProgress();
  const [completed, setCompleted] = useState({});
  const savedForSession = useRef(false);

  const exercises = fullTrainingSession.exercises;
  const total = exercises.length;
  const doneCount = exercises.filter((_, index) => completed[index]).length;
  const isFinished = total > 0 && doneCount === total;

  useEffect(() => {
    if (isFinished && !savedForSession.current) {
      addWorkout(fullTrainingSession.name);
      savedForSession.current = true;
    }
  }, [isFinished, addWorkout]);

  const toggleExercise = (index) => {
    setCompleted((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const resetSession = () => {
    setCompleted({});
    savedForSession.current = false;
  };

  return (
    <AnimatedTabScene>
      <View className="min-h-0 flex-1 bg-app-bg">
        <ScrollView className="flex-1 bg-app-bg px-5 pt-5">
          <PageHeader
            title="Training"
            subtitle="Complete all six movement chains. Targets follow your current step and level."
          />

          <View className="mb-4">
            <Text className="mb-1 text-xl font-bold text-white">
              {fullTrainingSession.name}
            </Text>
            <Text className="text-[13px] text-[#aaa]">
              {doneCount} of {total} complete
            </Text>
          </View>

          {exercises.map((exercise, index) => {
            const isDone = !!completed[index];
            const chainId = FAMILY_TO_CHAIN[exercise.name];
            const chain = getChainByFamilyName(exercise.name);
            const chainProgress = chainId ? getChainProgress(chainId) : null;
            const currentStep =
              chain && chainProgress
                ? chain.steps.find((step) => step.step === chainProgress.currentStep)
                : null;

            return (
              <Pressable
                key={exercise.name}
                onPress={() => toggleExercise(index)}
                className="mb-3 flex-row items-center rounded-[5px] bg-app-surface px-3 py-3"
              >
                <View
                  className={`mr-3 h-6 w-6 items-center justify-center rounded border ${
                    isDone
                      ? "border-white bg-white"
                      : "border-[#8a91a8] bg-transparent"
                  }`}
                >
                  {isDone ? (
                    <Text className="text-[14px] font-bold text-app-bg">✓</Text>
                  ) : null}
                </View>
                <View className="flex-1">
                  <Text
                    className={`text-[15px] font-semibold ${
                      isDone ? "text-[#8a91a8] line-through" : "text-white"
                    }`}
                  >
                    {exercise.name}
                  </Text>
                  <Text className="mt-0.5 text-[12px] text-[#aaa]">
                    {exercise.caption}
                  </Text>
                  {currentStep && chainProgress ? (
                    <Text className="mt-1 text-[12px] text-[#30c8f8]">
                      Step {chainProgress.currentStep}: {currentStep.name} ·{" "}
                      {getLevelLabel(chainProgress.currentLevel)} ·{" "}
                      {formatStandard(currentStep, chainProgress.currentLevel)}
                    </Text>
                  ) : null}
                </View>
              </Pressable>
            );
          })}

          {isFinished ? (
            <View className="mb-8 mt-2 rounded-[5px] border border-app-border bg-app-surface px-4 py-4">
              <Text className="mb-2 text-lg font-bold text-white">
                Training complete
              </Text>
              <Text className="mb-4 text-[14px] leading-5 text-[#ccc]">
                You finished all six movement chains. It was saved to History.
              </Text>
              <Pressable
                onPress={resetSession}
                className="items-center rounded-[5px] border border-app-border py-3"
              >
                <Text className="text-[14px] font-semibold text-white">
                  Start new session
                </Text>
              </Pressable>
            </View>
          ) : (
            <View className="mb-8 h-4" />
          )}
        </ScrollView>
      </View>
    </AnimatedTabScene>
  );
};

export default ProgressScreen;
