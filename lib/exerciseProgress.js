import allExercisesData from "../data/allExercises";

export const LEVELS = ["beginner", "intermediate", "progression"];

export const CHAIN_TO_FAMILY = {
  pushups: "Push Ups",
  squats: "Squats",
  pullups: "Pullups",
  leg_raises: "Leg Raises",
  bridges: "Bridges",
  handstand_pushups: "Handstand Pushups",
};

export const FAMILY_TO_CHAIN = Object.fromEntries(
  Object.entries(CHAIN_TO_FAMILY).map(([chainId, familyName]) => [
    familyName,
    chainId,
  ])
);

export const chains = allExercisesData.program.chains;
export const progressionLevels = allExercisesData.progression_rules.levels;

export const getChainById = (chainId) =>
  chains.find((chain) => chain.id === chainId);

export const getChainByFamilyName = (familyName) => {
  const chainId = FAMILY_TO_CHAIN[familyName];
  return chainId ? getChainById(chainId) : undefined;
};

export const getStep = (chainId, stepNumber) => {
  const chain = getChainById(chainId);
  return chain?.steps.find((item) => item.step === stepNumber);
};

export const getStepById = (stepId) => {
  for (const chain of chains) {
    const step = chain.steps.find((item) => item.id === stepId);
    if (step) return { chain, step };
  }
  return undefined;
};

export const getNextLevel = (currentLevel) => {
  const index = LEVELS.indexOf(currentLevel);
  if (index === -1 || index >= LEVELS.length - 1) return null;
  return LEVELS[index + 1];
};

export const createDefaultProgress = () => {
  const chainsProgress = {};
  for (const chain of chains) {
    chainsProgress[chain.id] = {
      currentStep: 1,
      currentLevel: "beginner",
    };
  }
  return chainsProgress;
};

const formatDuration = (seconds) => {
  if (seconds >= 60 && seconds % 60 === 0) {
    const minutes = seconds / 60;
    return `${minutes} min`;
  }
  return `${seconds}s`;
};

export const formatStandard = (step, levelId) => {
  const standard = step.standards[levelId];
  if (!standard) return "";

  if (step.type === "hold") {
    return formatDuration(standard.duration_seconds);
  }

  const sideNote = step.per_side ? " per side" : "";

  if (standard.reps_min != null && standard.reps_max != null) {
    return `${standard.sets} set${standard.sets > 1 ? "s" : ""} × ${standard.reps_min}–${standard.reps_max} reps${sideNote}`;
  }

  return `${standard.sets} set${standard.sets > 1 ? "s" : ""} × ${standard.reps} reps${sideNote}`;
};

export const getLevelLabel = (levelId) =>
  progressionLevels.find((level) => level.id === levelId)?.name ?? levelId;

export const getStepStatus = (chainProgress, stepNumber) => {
  if (!chainProgress) return "locked";

  if (stepNumber < chainProgress.currentStep) return "completed";
  if (stepNumber > chainProgress.currentStep) return "locked";
  return "current";
};
