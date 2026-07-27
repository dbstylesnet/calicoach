import React from "react";
import { ScrollView, Text, View } from "react-native";

import {
  formatWorkoutDateTime,
  useWorkoutHistory,
} from "../../context/WorkoutHistoryContext";

const HistoryScreen = () => {
  const { history } = useWorkoutHistory();

  return (
    <View className="min-h-0 flex-1 bg-app-bg">
      <ScrollView className="flex-1 bg-app-bg px-5 pt-5">
        <Text className="mb-1 text-2xl font-bold text-white">History</Text>
        <Text className="mb-6 text-[15px] leading-5 text-[#ccc]">
          Completed workouts with date and time.
        </Text>

        {history.length === 0 ? (
          <View className="rounded-[5px] border border-app-border bg-app-surface px-4 py-4">
            <Text className="text-[15px] text-[#ccc]">
              No finished workouts yet. Complete a routine in Progress to see it
              here.
            </Text>
          </View>
        ) : (
          history.map((entry) => {
            const { dateLabel, timeLabel } = formatWorkoutDateTime(
              entry.completedAt
            );

            return (
              <View
                key={entry.id}
                className="mb-3 rounded-[5px] border border-app-border bg-app-surface px-4 py-4"
              >
                <Text className="mb-2 text-lg font-bold text-white">
                  {entry.name}
                </Text>
                <Text className="text-[13px] text-[#aaa]">
                  {dateLabel} · {timeLabel}
                </Text>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;
