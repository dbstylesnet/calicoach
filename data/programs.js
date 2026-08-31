import { exercises } from "./exercises";

const exerciseByName = (name) => {
  const family = exercises.find((item) => item.name === name);
  if (!family) {
    throw new Error(`Unknown exercise family: ${name}`);
  }
  return family;
};

/** Program item = main category from the Exercises list. */
const fromCategory = (familyName, workSets = "2–3 work sets") => {
  const family = exerciseByName(familyName);
  return {
    name: family.name,
    caption: family.caption,
    workSets,
  };
};

const restDay = (label) => ({ label, rest: true, exercises: [] });

const workoutDay = (label, familyNames, workSets = "2–3 work sets") => ({
  label,
  rest: false,
  exercises: familyNames.map((name) => fromCategory(name, workSets)),
});

/**
 * Convict Conditioning book programs — New Blood, Good Behavior, Veterano.
 * Weekly layouts follow Paul Wade's published routines.
 */
export const convictConditioningPrograms = [
  {
    id: "new-blood",
    name: "New Blood",
    level: "Beginner",
    caption: "2 sessions per week · 4 core movements",
    description:
      "The entry-level Convict Conditioning routine. Train pushups, leg raises, pullups, and squats with plenty of recovery. Bridges and handstand pushups are added once you reach step 7 in the basic four.",
    workSets: "2–3 work sets per exercise",
    weeks: [
      {
        id: "new-blood-week-1",
        name: "Week 1",
        days: [
          workoutDay("Monday", ["Push Ups", "Leg Raises"]),
          restDay("Tuesday"),
          restDay("Wednesday"),
          workoutDay("Thursday", ["Pullups", "Squats"]),
          restDay("Friday"),
          restDay("Saturday"),
          restDay("Sunday"),
        ],
      },
      {
        id: "new-blood-week-2",
        name: "Week 2 — alternate sessions",
        days: [
          workoutDay("Monday", ["Pullups", "Squats"]),
          restDay("Tuesday"),
          restDay("Wednesday"),
          workoutDay("Thursday", ["Push Ups", "Leg Raises"]),
          restDay("Friday"),
          restDay("Saturday"),
          restDay("Sunday"),
        ],
      },
    ],
  },
  {
    id: "good-behavior",
    name: "Good Behavior",
    level: "Intermediate",
    caption: "3 sessions per week · all six movements",
    description:
      "The classic intermediate routine spread across the week. Each movement is trained once per week with two work sets (2–3 for handstand pushups and bridges). Rest at least one day between sessions.",
    workSets: "2 work sets per exercise (2–3 for HSPU & bridges)",
    weeks: [
      {
        id: "good-behavior-week",
        name: "Weekly schedule",
        days: [
          workoutDay("Monday", ["Push Ups", "Leg Raises"], "2 work sets"),
          restDay("Tuesday"),
          workoutDay("Wednesday", ["Pullups", "Squats"], "2 work sets"),
          restDay("Thursday"),
          workoutDay(
            "Friday",
            ["Handstand Pushups", "Bridges"],
            "2–3 work sets"
          ),
          restDay("Saturday"),
          restDay("Sunday"),
        ],
      },
    ],
  },
  {
    id: "veterano",
    name: "Veterano",
    level: "Advanced",
    caption: "6 sessions per week · one movement per day",
    description:
      "The advanced minimal-volume routine. One Big Six exercise per day with full recovery before that movement comes around again. Only attempt this once Good Behavior feels easy.",
    workSets: "2–3 work sets",
    weeks: [
      {
        id: "veterano-week",
        name: "Weekly schedule",
        days: [
          workoutDay("Monday", ["Pullups"]),
          workoutDay("Tuesday", ["Bridges"]),
          workoutDay("Wednesday", ["Handstand Pushups"]),
          workoutDay("Thursday", ["Leg Raises"]),
          workoutDay("Friday", ["Squats"]),
          workoutDay("Saturday", ["Push Ups"]),
          restDay("Sunday"),
        ],
      },
    ],
  },
];

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getProgramById = (programId) =>
  convictConditioningPrograms.find((program) => program.id === programId);

export const getActiveWeek = (program) => {
  if (program.id === "new-blood") {
    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    const weekIndex = Math.floor(Date.now() / msPerWeek) % program.weeks.length;
    return program.weeks[weekIndex];
  }
  return program.weeks[0];
};

export const getTodaysSession = (program) => {
  const week = getActiveWeek(program);
  const todayName = DAY_NAMES[new Date().getDay()];
  return week.days.find((day) => day.label === todayName) ?? restDay(todayName);
};

export const getExerciseKey = (weekId, dayLabel, exerciseName) =>
  `${weekId}:${dayLabel}:${exerciseName}`;

export const getProgramExerciseEntries = (program) => {
  const entries = [];

  for (const week of program.weeks) {
    for (const day of week.days) {
      if (day.rest) continue;

      for (const exercise of day.exercises) {
        entries.push({
          key: getExerciseKey(week.id, day.label, exercise.name),
          weekId: week.id,
          weekName: week.name,
          dayLabel: day.label,
          exercise,
        });
      }
    }
  }

  return entries;
};
