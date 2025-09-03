import styled from "styled-components"

export const PostHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  position: relative;
  top: -5rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme["blue"]};
    line-height: 0;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.75rem;
  }

  h2 {
    color: ${(props) => props.theme["base-title"]};
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
`
export const PostHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-span"]};

    svg {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`
