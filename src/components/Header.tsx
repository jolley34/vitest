import styled from "styled-components";
import { device } from "../styles/breakpoints";

interface Props {
  currentQuestion: number;
  totalQuestions: number;
}

const Wrapper = styled.div`
  padding: 1rem 4rem;
  @media ${device.sm} {
    padding: 1rem 1rem;
  }
  background-color: #1c1c1c;
`;

const CountTitle = styled.p`
  font-size: 1.5rem;
  color: white;
  font-weight: 200;

  @media ${device.sm} {
    font-size: 1rem;
  }
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  color: white;
`;

export default function Header({ currentQuestion, totalQuestions }: Props) {
  return (
    <Wrapper>
      <SpaceBetween>
        <MainTitle>
          who. <br /> <CountTitle>celebrity edition</CountTitle>
        </MainTitle>
        <CountTitle>
          Question {currentQuestion + 1}/{totalQuestions}
        </CountTitle>
      </SpaceBetween>
    </Wrapper>
  );
}
