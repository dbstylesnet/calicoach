export const exercises = [
  {
    name: "Push Ups",
    caption: "Pressing Power",
    description:
      "Push ups build pressing strength through the chest, shoulders, and triceps using only your bodyweight. Work through the steps in order so you earn harder variations without rushing form.",
    steps: [
      "Wall Pushup",
      "Incline Pushup",
      "Kneeling Pushup",
      "Half Pushup",
      "Full Pushup",
      "Close Pushup",
      "Uneven Pushup",
      "Half One-Arm Pushup",
      "Lever Pushup",
      "One-Arm Pushup",
    ],
  },
  {
    name: "Squats",
    caption: "Leg Power",
    description:
      "Squats develop the quads, glutes, and overall lower-body strength that carries into every athletic movement. Progress step by step until single-leg work feels controlled and balanced.",
    steps: [
      "Shoulderstand Squat",
      "Jackknife Squat",
      "Supported Squat",
      "Half Squat",
      "Full Squat",
      "Close Squat",
      "Uneven Squat",
      "Half One-Leg Squat",
      "Assisted One-Leg Squat",
      "One-Leg Squat (Pistol)",
    ],
  },
  {
    name: "Pullups",
    caption: "Pulling Power",
    description:
      "Pullups train the back, biceps, and grip by pulling your body toward a bar or similar hold. Master easier horizontal and assisted steps before chasing full and one-arm pullups.",
    steps: [
      "Vertical Pull",
      "Horizontal Pull",
      "Jackknife Pull",
      "Half Pullup",
      "Full Pullup",
      "Close Pullup",
      "Uneven Pullup",
      "Half One-Arm Pullup",
      "Assisted One-Arm Pullup",
      "One-Arm Pullup",
    ],
  },
  {
    name: "Leg Raises",
    caption: "Midsection Power",
    description:
      "Leg raises strengthen the abs and hip flexors while teaching you to control the trunk under load. Start on the floor, then move to hanging versions as your midsection gets stronger.",
    steps: [
      "Knee Tucks",
      "Flat Knee Raise",
      "Flat Bent Leg Raise",
      "Flat Frog Raise",
      "Flat Straight Leg Raise",
      "Hanging Knee Raise",
      "Hanging Bent Leg Raise",
      "Hanging Frog Raise",
      "Partial Straight Leg Raise",
      "Hanging Straight Leg Raise",
    ],
  },
  {
    name: "Bridges",
    caption: "Spinal Power",
    description:
      "Bridges build posterior chain strength and spinal mobility through progressive back-bending holds and presses. Move carefully through each step to protect the neck and lower back.",
    steps: [
      "Short Bridge",
      "Straight Bridge",
      "Angled Bridge",
      "Head Bridge",
      "Half Bridge",
      "Full Bridge",
      "Wall Walking (Down)",
      "Wall Walking (Up)",
      "Closing Bridge",
      "Stand-to-Stand Bridge",
    ],
  },
  {
    name: "Handstand Pushups",
    caption: "Shoulder Power",
    description:
      "Handstand pushups develop overhead pressing strength, balance, and shoulder stability upside down. Learn solid inversion first, then add deeper pressing range as control improves.",
    steps: [
      "Wall Headstand",
      "Crow Stand",
      "Wall Handstand",
      "Half Handstand Pushup",
      "Full Handstand Pushup",
      "Close Handstand Pushup",
      "Uneven Handstand Pushup",
      "Half One-Arm Handstand Pushup",
      "Lever Handstand Pushup",
      "One-Arm Handstand Pushup",
    ],
  },
];

export const findExerciseFamily = (stepName) => {
  return exercises.find((family) => family.steps.includes(stepName))?.name;
};
