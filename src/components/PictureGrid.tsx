import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 2rem 2rem 2rem;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
  gap: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;

  cursor: pointer;
  filter: grayscale(0);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(1);
  }
`;

export default function PictureGrid() {
  return (
    <>
      <Wrapper>
        <Title>Who is Jake Paul?</Title>
        <Grid>
          <Image src="https://parade.com/.image/t_share/MTk3MjI5MDAxNTM2NzA5OTUx/jake-paul-v-tyron-woodley---weigh-in.jpg" />
          <Image src="https://vz.cnwimg.com/wp-content/uploads/2023/06/Danny-Duncan.jpg" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Logan_Paul_%2848086619418%29.jpg/1200px-Logan_Paul_%2848086619418%29.jpg" />
          <Image src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6ccabba-ea38-411f-a673-04f26b5e919c_980x980.jpeg" />
          <Image src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-09/justin-bieber-te-220906-50b634.jpg" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/c/ce/MrBeast_2023_%28cropped%29.jpg" />
        </Grid>
      </Wrapper>
    </>
  );
}
