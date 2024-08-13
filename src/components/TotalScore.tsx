import styled from "styled-components";
import mockedData from "../MockedData";
import { device } from "../styles/breakpoints";
import Header from "./Header";

interface Props {
  currentQuestionIndex: number;
  score: number;
}

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 0rem;
`;

export default function TotalScore({ currentQuestionIndex, score }: Props) {
  const handleTryAgainClick = () => {
    window.location.reload();
  };

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
