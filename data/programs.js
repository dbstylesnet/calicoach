import { exercises } from "./exercises";

const exerciseByName = (name) => {
  const family = exercises.find((item) => item.name === name);
  if (!family) {
    throw new Error(`Unknown exercise family: ${name}`);
  }
  return family;
};

/** Program item = main category from the Exercises list. */
const fromCategory = (familyName, sets) => {
  const family = exerciseByName(familyName);
  return {
    name: family.name,
    caption: family.caption,
    sets,
  };
};

export const sampleProgram = {
  name: "Beginner Strength Path",
  caption: "3 days per week · 4 weeks",
  description:
    "Each day is built from the main exercise categories. Rest at least one day between sessions.",
  days: [
    {
      id: "day-a",
      name: "Day A — Push & Core",
      exercises: [
        fromCategory("Push Ups", "3 × 8–12"),
        fromCategory("Squats", "3 × 8–12"),
        fromCategory("Leg Raises", "3 × 10–15"),
        fromCategory("Bridges", "3 × 10–15"),
      ],
    },
    {
      id: "day-b",
      name: "Day B — Pull & Shoulders",
      exercises: [
        fromCategory("Pullups", "3 × 6–10"),
        fromCategory("Squats", "3 × 8–12"),
        fromCategory("Leg Raises", "3 × 8–12"),
        fromCategory("Handstand Pushups", "3 × 20–40s"),
      ],
    },
    {
      id: "day-c",
      name: "Day C — Full Body",
      exercises: [
        fromCategory("Push Ups", "3 × 8–12"),
        fromCategory("Pullups", "3 × 5–8"),
        fromCategory("Bridges", "3 × 8–12"),
        fromCategory("Handstand Pushups", "5 × 10–20s"),
      ],
    },
  ],
};

export const trainingRoutines = sampleProgram.days;
