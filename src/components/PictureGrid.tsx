import { useState } from "react";
import styled from "styled-components";
import mockedData from "../MockedData";
import { device } from "../styles/breakpoints";
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 0rem;
`;

const Title = styled.h1`
  color: white;
  padding: 2rem 0rem;
  font-size: 4rem;
  text-align: center;

  @media ${device.md} {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 250px);
  gap: 1rem;

  @media ${device.md} {
    grid-template-columns: repeat(2, 180px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;

  cursor: pointer;
  filter: grayscale(0);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(1);
  }
`;

const Score = styled.h2`
  color: white;
  padding: 1rem 0;
  font-size: 2rem;
  text-align: center;

  @media ${device.md} {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
`;

export default function PictureGrid() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleTryAgainClick = () => {
    window.location.reload();
  };

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < mockedData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <>
        <Header
          currentQuestion={currentQuestionIndex}
          totalQuestions={mockedData.length}
        />
        <Wrapper>
          <Score>
            You got {score} of {mockedData.length} right answers!
          </Score>
          <Button onClick={handleTryAgainClick}>Try Again?</Button>
        </Wrapper>
      </>
    );
  }

  const currentQuestion = mockedData[currentQuestionIndex];

  return (
    <>
      <Header
        currentQuestion={currentQuestionIndex}
        totalQuestions={mockedData.length}
      />
      <Title>{currentQuestion.question.name}</Title>
      <Wrapper>
        <Grid>
          {currentQuestion.options.map((option, index) => (
            <Image
              key={index}
              src={option.image}
              alt={option.name}
              onClick={() => handleOptionClick(option.isCorrect)}
            />
          ))}
        </Grid>
      </Wrapper>
    </>
  );
}
