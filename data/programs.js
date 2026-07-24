export const sampleProgram = {
  name: "Beginner Strength Path",
  caption: "3 days per week · 4 weeks",
  description:
    "A simple full-body progression using early steps from each movement family. Rest at least one day between sessions.",
  days: [
    {
      id: "day-a",
      name: "Day A — Push & Core",
      exercises: [
        { name: "Incline Pushup", sets: "3 × 8–12" },
        { name: "Jackknife Squat", sets: "3 × 8–12" },
        { name: "Knee Tucks", sets: "3 × 10–15" },
        { name: "Short Bridge", sets: "3 × 10–15" },
      ],
    },
    {
      id: "day-b",
      name: "Day B — Pull & Shoulders",
      exercises: [
        { name: "Horizontal Pull", sets: "3 × 6–10" },
        { name: "Supported Squat", sets: "3 × 8–12" },
        { name: "Flat Knee Raise", sets: "3 × 8–12" },
        { name: "Wall Headstand", sets: "3 × 20–40s" },
      ],
    },
    {
      id: "day-c",
      name: "Day C — Full Body",
      exercises: [
        { name: "Kneeling Pushup", sets: "3 × 8–12" },
        { name: "Jackknife Pull", sets: "3 × 5–8" },
        { name: "Straight Bridge", sets: "3 × 8–12" },
        { name: "Crow Stand", sets: "5 × 10–20s" },
      ],
    },
  ],
};

export const trainingRoutines = sampleProgram.days;
