import React, { useEffect, useMemo, useRef, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useIsFocused } from "@react-navigation/native";

import { AnimatedTabScene } from "../../components/AnimatedTabScene";
import { PageHeader } from "../../components/PageHeader";
import { useExerciseProgress } from "../../context/ExerciseProgressContext";
import { useProgramSelection } from "../../context/ProgramSelectionContext";
import { useWorkoutHistory } from "../../context/WorkoutHistoryContext";
import {
  getActiveWeek,
  getExerciseKey,
  getProgramExerciseEntries,
} from "../../data/programs";
import {
  FAMILY_TO_CHAIN,
  formatStandard,
  getChainByFamilyName,
  getLevelLabel,
} from "../../lib/exerciseProgress";
import { setTabSlideDirection } from "../../lib/tabTransition";

const ExerciseRow = ({ exercise, isDone, onToggle, getChainProgress }) => {
  const chainId = FAMILY_TO_CHAIN[exercise.name];
  const chain = getChainByFamilyName(exercise.name);
  const chainProgress = chainId ? getChainProgress(chainId) : null;
  const currentStep =
    chain && chainProgress
      ? chain.steps.find((step) => step.step === chainProgress.currentStep)
      : null;

  return (
    <Pressable
      onPress={onToggle}
      className="mb-2 flex-row items-center rounded-[5px] bg-[#1a1f30] px-3 py-3"
    >
      <View
        className={`mr-3 h-6 w-6 items-center justify-center rounded border ${
          isDone ? "border-white bg-white" : "border-[#8a91a8] bg-transparent"
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
          {exercise.caption} · {exercise.workSets}
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
};

const ProgressScreen = () => {
  const router = useRouter();
  const isFocused = useIsFocused();
  const { addWorkout } = useWorkoutHistory();
  const { getChainProgress } = useExerciseProgress();
  const {
    selectedProgram,
    selectedProgramId,
    ready,
    requestProgramSelection,
  } = useProgramSelection();
  const [completed, setCompleted] = useState({});
  const savedForSession = useRef(false);

  useEffect(() => {
    if (!ready || !isFocused) return;

    if (!selectedProgramId) {
      setTabSlideDirection(-1);
      requestProgramSelection();
      router.replace("/programs");
    }
  }, [ready, isFocused, selectedProgramId, requestProgramSelection, router]);

  const activeWeek = useMemo(
    () => (selectedProgram ? getActiveWeek(selectedProgram) : null),
    [selectedProgram]
  );

  const exerciseEntries = useMemo(
    () => (selectedProgram ? getProgramExerciseEntries(selectedProgram) : []),
    [selectedProgram]
  );

  const total = exerciseEntries.length;
  const doneCount = exerciseEntries.filter((entry) => completed[entry.key]).length;
  const isFinished = total > 0 && doneCount === total;

  useEffect(() => {
    if (isFinished && selectedProgram && !savedForSession.current) {
      addWorkout(selectedProgram.name);
      savedForSession.current = true;
    }
  }, [isFinished, selectedProgram, addWorkout]);

  const toggleExercise = (key) => {
    setCompleted((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const resetSession = () => {
    setCompleted({});
    savedForSession.current = false;
  };

  if (!ready || !selectedProgram) {
    return (
      <AnimatedTabScene>
        <View className="min-h-0 flex-1 bg-app-bg" />
      </AnimatedTabScene>
    );
  }

  const todayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date().getDay()];

  return (
    <AnimatedTabScene>
      <View className="min-h-0 flex-1 bg-app-bg">
        <ScrollView className="flex-1 bg-app-bg px-5 pt-5">
          <PageHeader
            title="Training"
            subtitle={`${selectedProgram.name} · full program schedule`}
          />

          <View className="mb-4">
            <Text className="mb-1 text-xl font-bold text-white">
              {selectedProgram.name}
            </Text>
            <Text className="text-[13px] text-[#aaa]">
              {doneCount} of {total} exercises complete
            </Text>
          </View>

          {selectedProgram.weeks.map((week) => (
            <View key={week.id} className="mb-6">
              <Text className="mb-3 text-[16px] font-bold text-white">
                {week.name}
              </Text>

              {week.days.map((day) => {
                const isToday =
                  week.id === activeWeek?.id && day.label === todayName;

                return (
                  <View
                    key={`${week.id}-${day.label}`}
                    className={`mb-3 rounded-[5px] border px-3 py-3 ${
                      isToday
                        ? "border-[#30c8f8] bg-app-surface"
                        : "border-app-border bg-app-surface"
                    }`}
                  >
                    <Text
                      className={`mb-2 text-[14px] font-semibold ${
                        day.rest ? "text-[#666]" : "text-white"
                      }`}
                    >
                      {day.label}
                      {day.rest ? " — Rest" : ""}
                      {isToday ? " · Today" : ""}
                    </Text>

                    {!day.rest &&
                      day.exercises.map((exercise) => {
                        const key = getExerciseKey(week.id, day.label, exercise.name);

                        return (
                          <ExerciseRow
                            key={key}
                            exercise={exercise}
                            isDone={!!completed[key]}
                            onToggle={() => toggleExercise(key)}
                            getChainProgress={getChainProgress}
                          />
                        );
                      })}
                  </View>
                );
              })}
            </View>
          ))}

          {isFinished ? (
            <View className="mb-8 mt-2 rounded-[5px] border border-app-border bg-app-surface px-4 py-4">
              <Text className="mb-2 text-lg font-bold text-white">
                Training complete
              </Text>
              <Text className="mb-4 text-[14px] leading-5 text-[#ccc]">
                You finished every exercise in this program. It was saved to History.
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
