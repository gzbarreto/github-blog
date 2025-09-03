import styled from "styled-components"

export const PostCardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme["base-text"]};

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
