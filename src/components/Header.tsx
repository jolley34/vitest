import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  background-color: #1c1c1c;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CountTitle = styled.p`
  font-size: 1.5rem;
`;

export default function Header() {
  return (
    <>
      <Wrapper>
        <Flex>
          <Title>Famous People Quiz</Title>
          <CountTitle>Question 0/10</CountTitle>
        </Flex>
      </Wrapper>
    </>
  );
}
