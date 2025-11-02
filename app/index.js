import React from "react";
import styled from "styled-components/native";

const HomeScreen = () => {
  return (
    <Container>
      <ExerciseText>Push ups</ExerciseText>
      <CaptionText>Pressing Power</CaptionText>

      <ExerciseText>Pullups</ExerciseText>
      <CaptionText>Pulling Power</CaptionText>

      <ExerciseText>Leg Raises</ExerciseText>
      <CaptionText>Midsection Power</CaptionText>

      <ExerciseText>Squats</ExerciseText>
      <CaptionText>Leg Power</CaptionText>

      <ExerciseText>Bridges</ExerciseText>
      <CaptionText>Spinal Power</CaptionText>

      <ExerciseText>Handstand Pushups</ExerciseText>
      <CaptionText>Shoulder Power</CaptionText>
    </Container>
  );
};

// Styled components
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #171b2a;
  width: 100%;
  height: 100px;
`;

const ExerciseText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0px;
`;

const CaptionText = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: normal;
  margin-bottom: 20px;
`;

export default HomeScreen;
