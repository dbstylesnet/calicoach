import React, { useState } from "react";
import { Pressable, View } from "react-native";
import styled from "styled-components/native";

import { AnimatedTabScene } from "../../components/AnimatedTabScene";
import { PageHeader } from "../../components/PageHeader";
import { useExerciseProgress } from "../../context/ExerciseProgressContext";
import { exercises } from "../../data/exercises";
import {
  FAMILY_TO_CHAIN,
  LEVELS,
  formatStandard,
  getChainByFamilyName,
  getLevelLabel,
  getStepStatus,
} from "../../lib/exerciseProgress";

const ExercisesScreen = () => {
  const { getChainProgress, markLevelComplete } = useExerciseProgress();
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
            subtitle="Each chain has 10 steps with beginner, intermediate, and progression targets."
          />

          {exercises.map((exercise) => {
            const chainId = FAMILY_TO_CHAIN[exercise.name];
            const chain = getChainByFamilyName(exercise.name);
            const chainProgress = chainId ? getChainProgress(chainId) : null;
            const currentStepData =
              chain && chainProgress
                ? chain.steps.find((step) => step.step === chainProgress.currentStep)
                : null;

            return (
              <Section key={exercise.name}>
                <Touchable onPress={() => toggleCategory(exercise.name)}>
                  <ExerciseText>{exercise.name}</ExerciseText>
                  <CaptionText>{exercise.caption}</CaptionText>
                  {chainProgress && currentStepData ? (
                    <ProgressSummary>
                      Step {chainProgress.currentStep} of {chain.steps.length} ·{" "}
                      {getLevelLabel(chainProgress.currentLevel)} ·{" "}
                      {currentStepData.name}
                    </ProgressSummary>
                  ) : null}
                  <DescriptionText>{exercise.description}</DescriptionText>
                </Touchable>

                {expandedCategories[exercise.name] &&
                  exercise.steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const stepData = chain?.steps[index];
                    const status = getStepStatus(chainProgress, stepNumber);
                    const isCurrent = status === "current";
                    const stepKey = `${exercise.name}-${index}`;

                    return (
                      <StepContainer key={step.name}>
                        <StepTouchable onPress={() => toggleStep(exercise.name, index)}>
                          <StepRow>
                            <StepBadge status={status}>
                              <StepBadgeText status={status}>{stepNumber}</StepBadgeText>
                            </StepBadge>
                            <StepText status={status}>
                              {step.name}
                              {status === "completed" ? " ✓" : ""}
                            </StepText>
                          </StepRow>
                        </StepTouchable>

                        {expandedSteps[stepKey] && (
                          <StepDetail>
                            <StepDetailText>{step.description}</StepDetailText>

                            {stepData ? (
                              <StandardsBlock>
                                <StandardsTitle>Difficulty targets</StandardsTitle>
                                {LEVELS.map((levelId) => {
                                  const isActiveLevel =
                                    isCurrent && chainProgress?.currentLevel === levelId;

                                  return (
                                    <StandardRow key={levelId} active={isActiveLevel}>
                                      <StandardLabel active={isActiveLevel}>
                                        {getLevelLabel(levelId)}
                                        {isActiveLevel ? " (current)" : ""}
                                      </StandardLabel>
                                      <StandardValue active={isActiveLevel}>
                                        {formatStandard(stepData, levelId)}
                                      </StandardValue>
                                    </StandardRow>
                                  );
                                })}
                              </StandardsBlock>
                            ) : null}

                            {isCurrent && chainId ? (
                              <CompleteButton
                                onPress={() => markLevelComplete(chainId)}
                              >
                                <CompleteButtonText>
                                  Mark {getLevelLabel(chainProgress.currentLevel)} complete
                                </CompleteButtonText>
                              </CompleteButton>
                            ) : null}
                          </StepDetail>
                        )}
                      </StepContainer>
                    );
                  })}
              </Section>
            );
          })}
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

const ProgressSummary = styled.Text`
  color: #30c8f8;
  font-size: 13px;
  font-weight: 600;
  margin-top: 6px;
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

const StepRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 3px;
`;

const StepBadge = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: ${({ status }) =>
    status === "completed"
      ? "#30c8f8"
      : status === "current"
        ? "#222842"
        : "#1a1f30"};
  border: 1px solid
    ${({ status }) =>
      status === "current" ? "#30c8f8" : status === "completed" ? "#30c8f8" : "#2a3045"};
`;

const StepBadgeText = styled.Text`
  color: ${({ status }) => (status === "locked" ? "#666" : "#fff")};
  font-size: 12px;
  font-weight: bold;
`;

const StepText = styled.Text`
  color: ${({ status }) =>
    status === "locked" ? "#666" : status === "completed" ? "#8a91a8" : "#fff"};
  font-size: 16px;
  flex: 1;
`;

const StepDetail = styled.View`
  background-color: #222842;
  padding: 10px;
  margin-left: 10px;
  margin-top: 4px;
  border-radius: 5px;
`;

const StepDetailText = styled.Text`
  color: #ccc;
  font-size: 13px;
  line-height: 18px;
`;

const StandardsBlock = styled.View`
  margin-top: 12px;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: #2a3045;
`;

const StandardsTitle = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const StandardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  margin-bottom: 4px;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? "#1a3040" : "transparent")};
`;

const StandardLabel = styled.Text`
  color: ${({ active }) => (active ? "#30c8f8" : "#aaa")};
  font-size: 12px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
`;

const StandardValue = styled.Text`
  color: ${({ active }) => (active ? "#fff" : "#ccc")};
  font-size: 12px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
`;

const CompleteButton = styled(Pressable)`
  margin-top: 12px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #30c8f8;
  align-items: center;
`;

const CompleteButtonText = styled.Text`
  color: #30c8f8;
  font-size: 13px;
  font-weight: 600;
`;

export default ExercisesScreen;
