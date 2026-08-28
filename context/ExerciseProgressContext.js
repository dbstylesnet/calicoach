import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Platform } from "react-native";

import {
  createDefaultProgress,
  getChainById,
  getNextLevel,
  getStep,
} from "../lib/exerciseProgress";

const STORAGE_KEY = "calicoach.exerciseProgress";

const ExerciseProgressContext = createContext({
  progress: {},
  ready: false,
  getChainProgress: () => undefined,
  markLevelComplete: () => {},
  resetChain: () => {},
  resetAll: () => {},
});

const readStorage = () => {
  try {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch {
    // ignore storage errors
  }
  return null;
};

const writeStorage = (progress) => {
  try {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  } catch {
    // ignore storage errors
  }
};

const mergeWithDefaults = (stored) => {
  const defaults = createDefaultProgress();
  if (!stored) return defaults;

  const merged = { ...defaults };
  for (const chainId of Object.keys(defaults)) {
    const saved = stored[chainId];
    if (!saved) continue;

    merged[chainId] = {
      currentStep: saved.currentStep ?? 1,
      currentLevel: saved.currentLevel ?? "beginner",
    };
  }
  return merged;
};

export const ExerciseProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(createDefaultProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(mergeWithDefaults(readStorage()));
    setReady(true);
  }, []);

  const getChainProgress = useCallback(
    (chainId) => progress[chainId],
    [progress]
  );

  const markLevelComplete = useCallback((chainId) => {
    setProgress((prev) => {
      const chainProgress = prev[chainId];
      const chain = getChainById(chainId);
      if (!chainProgress || !chain) return prev;

      const currentStepData = getStep(chainId, chainProgress.currentStep);
      if (!currentStepData) return prev;

      const nextLevel = getNextLevel(chainProgress.currentLevel);
      let next = { ...prev, [chainId]: { ...chainProgress } };

      if (nextLevel) {
        next[chainId].currentLevel = nextLevel;
      } else if (
        chainProgress.currentStep < chain.steps.length &&
        !currentStepData.master_step
      ) {
        next[chainId] = {
          currentStep: chainProgress.currentStep + 1,
          currentLevel: "beginner",
        };
      }

      writeStorage(next);
      return next;
    });
  }, []);

  const resetChain = useCallback((chainId) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        [chainId]: { currentStep: 1, currentLevel: "beginner" },
      };
      writeStorage(next);
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    const next = createDefaultProgress();
    setProgress(next);
    writeStorage(next);
  }, []);

  const value = useMemo(
    () => ({
      progress,
      ready,
      getChainProgress,
      markLevelComplete,
      resetChain,
      resetAll,
    }),
    [progress, ready, getChainProgress, markLevelComplete, resetChain, resetAll]
  );

  return (
    <ExerciseProgressContext.Provider value={value}>
      {children}
    </ExerciseProgressContext.Provider>
  );
};

export const useExerciseProgress = () => useContext(ExerciseProgressContext);
