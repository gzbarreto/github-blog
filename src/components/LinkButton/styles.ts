import styled from "styled-components"

export const LinkButtonContainer = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme["blue"]};

  font-weight: bold;
  font-size: 0.75rem;
  line-height: 160%;

  text-decoration: none;

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
    transition: border-color 0.2s;
  }

  &:active {
    color: ${(props) => props.theme["base-title"]};
    text-decoration: none;
  }
`
