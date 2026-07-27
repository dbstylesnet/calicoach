import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Platform } from "react-native";

const STORAGE_KEY = "calicoach.workoutHistory";

const WorkoutHistoryContext = createContext({
  history: [],
  addWorkout: () => {},
});

const readStorage = () => {
  try {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch {
    // ignore storage errors
  }
  return [];
};

const writeStorage = (entries) => {
  try {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }
  } catch {
    // ignore storage errors
  }
};

export const WorkoutHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setHistory(readStorage());
    setReady(true);
  }, []);

  const addWorkout = useCallback((name) => {
    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name,
      completedAt: new Date().toISOString(),
    };

    setHistory((prev) => {
      const next = [entry, ...prev];
      writeStorage(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      history,
      addWorkout,
      ready,
    }),
    [history, addWorkout, ready]
  );

  return (
    <WorkoutHistoryContext.Provider value={value}>
      {children}
    </WorkoutHistoryContext.Provider>
  );
};

export const useWorkoutHistory = () => useContext(WorkoutHistoryContext);

export const formatWorkoutDateTime = (isoString) => {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return { dateLabel: "Unknown date", timeLabel: "" };
  }

  const dateLabel = date.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const timeLabel = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { dateLabel, timeLabel };
};
