import styled from "styled-components";

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostListContainer = styled.main`
margin: 3rem 0;
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;
`