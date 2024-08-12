import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #1c1c1c;
  bottom: 0;

  height: 20vh;

  display: flex;
  justify-content: center;
`;

const Title = styled.p``;

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Title>@FamousPeopleQuiz</Title>
      </Wrapper>
    </>
  );
}
