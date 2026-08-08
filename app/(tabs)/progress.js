import React, { useEffect, useMemo, useRef, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { AnimatedTabScene } from "../../components/AnimatedTabScene";
import { PageHeader } from "../../components/PageHeader";
import { useWorkoutHistory } from "../../context/WorkoutHistoryContext";
import { trainingRoutines } from "../../data/programs";

const ProgressScreen = () => {
  const { addWorkout } = useWorkoutHistory();
  const [selectedRoutineId, setSelectedRoutineId] = useState(null);
  const [completed, setCompleted] = useState({});
  const savedForSession = useRef(false);

  const selectedRoutine = useMemo(
    () => trainingRoutines.find((routine) => routine.id === selectedRoutineId),
    [selectedRoutineId]
  );

  const total = selectedRoutine?.exercises.length ?? 0;
  const doneCount = selectedRoutine
    ? selectedRoutine.exercises.filter((_, index) => completed[index]).length
    : 0;
  const isFinished = total > 0 && doneCount === total;

  useEffect(() => {
    if (isFinished && selectedRoutine && !savedForSession.current) {
      addWorkout(selectedRoutine.name);
      savedForSession.current = true;
    }
  }, [isFinished, selectedRoutine, addWorkout]);

  const selectRoutine = (routineId) => {
    setSelectedRoutineId(routineId);
    setCompleted({});
    savedForSession.current = false;
  };

  const toggleExercise = (index) => {
    setCompleted((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const clearRoutine = () => {
    setSelectedRoutineId(null);
    setCompleted({});
    savedForSession.current = false;
  };

  if (!selectedRoutine) {
    return (
      <AnimatedTabScene>
        <View className="min-h-0 flex-1 bg-app-bg">
          <ScrollView className="flex-1 bg-app-bg px-5 pt-5">
            <PageHeader
              title="Training"
              subtitle="Choose a routine, then check off each category as you finish it."
            />

            {trainingRoutines.map((routine) => (
              <Pressable
                key={routine.id}
                onPress={() => selectRoutine(routine.id)}
                className="mb-3 rounded-[5px] border border-app-border bg-app-surface px-4 py-4"
              >
                <Text className="mb-1 text-lg font-bold text-white">
                  {routine.name}
                </Text>
                <Text className="text-[13px] text-[#aaa]">
                  {routine.exercises.length} categories from the exercise list
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </AnimatedTabScene>
    );
  }

  return (
    <AnimatedTabScene>
      <View className="min-h-0 flex-1 bg-app-bg">
        <ScrollView className="flex-1 bg-app-bg px-5 pt-5">
          <PageHeader title="Training" />

          <View className="mb-4 flex-row items-start justify-between">
            <View className="mr-3 flex-1">
              <Text className="mb-1 text-xl font-bold text-white">
                {selectedRoutine.name}
              </Text>
              <Text className="text-[13px] text-[#aaa]">
                {doneCount} of {total} complete
              </Text>
            </View>
            <Pressable onPress={clearRoutine} className="py-1">
              <Text className="text-[13px] font-semibold text-[#8a91a8]">
                Change
              </Text>
            </Pressable>
          </View>

          {selectedRoutine.exercises.map((exercise, index) => {
            const isDone = !!completed[index];

            return (
              <Pressable
                key={`${exercise.name}-${index}`}
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
                    {exercise.caption} · {exercise.sets}
                  </Text>
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
                You finished every exercise in this routine. It was saved to
                History.
              </Text>
              <Pressable
                onPress={clearRoutine}
                className="items-center rounded-[5px] border border-app-border py-3"
              >
                <Text className="text-[14px] font-semibold text-white">
                  Choose another routine
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
