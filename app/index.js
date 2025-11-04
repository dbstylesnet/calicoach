import React, { useState } from "react";
import styled from "styled-components/native";

const exercises = [
  {
    name: "Push Ups",
    caption: "Pressing Power",
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

const HomeScreen = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSteps, setExpandedSteps] = useState({});

  const toggleCategory = (name) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleStep = (exerciseName, stepIndex) => {
    const key = `${exerciseName}-${stepIndex}`;
    setExpandedSteps((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Container>
      {exercises.map((exercise) => (
        <Section key={exercise.name}>
          <Touchable onPress={() => toggleCategory(exercise.name)}>
            <ExerciseText>{exercise.name}</ExerciseText>
            <CaptionText>{exercise.caption}</CaptionText>
          </Touchable>

          {expandedCategories[exercise.name] &&
            exercise.steps.map((step, index) => (
              <StepContainer key={index}>
                <StepTouchable
                  onPress={() => toggleStep(exercise.name, index)}
                >
                  <StepText>
                    {index + 1}. {step}
                  </StepText>
                </StepTouchable>

                {expandedSteps[`${exercise.name}-${index}`] && (
                  <StepDetail>
                    <StepDetailText>
                      Details or description of "{step}" go here.
                    </StepDetailText>
                  </StepDetail>
                )}
              </StepContainer>
            ))}
        </Section>
      ))}
    </Container>
  );
};

// Styled components
const Container = styled.ScrollView`
  flex: 1;
  background-color: #171b2a;
  padding: 20px;
`;

const Section = styled.View`
  margin-bottom: 25px;
`;

const Touchable = styled.TouchableOpacity`
  align-items: left;
  margin-bottom: 10px;
`;

const ExerciseText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;

const CaptionText = styled.Text`
  color: #aaa;
  font-size: 13px;
`;

const StepContainer = styled.View`
  margin-left: 20px;
  margin-top: 5px;
`;

const StepTouchable = styled.TouchableOpacity``;

const StepText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-vertical: 3px;
`;

const StepDetail = styled.View`
  background-color: #222842;
  padding: 8px;
  margin-left: 10px;
  border-radius: 5px;
`;

const StepDetailText = styled.Text`
  color: #ccc;
  font-size: 13px;
`;

export default HomeScreen;
