import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { AnimatedTabScene } from "../../components/AnimatedTabScene";
import { PageHeader } from "../../components/PageHeader";
import { exercises } from "../../data/exercises";

const ExercisesScreen = () => {
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
    <AnimatedTabScene>
      <View className="min-h-0 flex-1 bg-app-bg">
        <Container>
          <PageHeader
            title="Exercises"
            subtitle="Browse each movement family and open a step for details."
          />

          {exercises.map((exercise) => (
            <Section key={exercise.name}>
              <Touchable onPress={() => toggleCategory(exercise.name)}>
                <ExerciseText>{exercise.name}</ExerciseText>
                <CaptionText>{exercise.caption}</CaptionText>
                <DescriptionText>{exercise.description}</DescriptionText>
              </Touchable>

              {expandedCategories[exercise.name] &&
                exercise.steps.map((step, index) => (
                  <StepContainer key={step.name}>
                    <StepTouchable
                      onPress={() => toggleStep(exercise.name, index)}
                    >
                      <StepText>
                        {index + 1}. {step.name}
                      </StepText>
                    </StepTouchable>

                    {expandedSteps[`${exercise.name}-${index}`] && (
                      <StepDetail>
                        <StepDetailText>{step.description}</StepDetailText>
                      </StepDetail>
                    )}
                  </StepContainer>
                ))}
            </Section>
          ))}
        </Container>
      </View>
    </AnimatedTabScene>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: transparent;
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

const DescriptionText = styled.Text`
  color: #ccc;
  font-size: 13px;
  line-height: 18px;
  margin-top: 6px;
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

export default ExercisesScreen;
