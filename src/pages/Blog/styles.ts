import styled from "styled-components";

export const BlogContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const PostListContainer = styled.main`
margin-top: 3rem;
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;
`