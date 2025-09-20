import styled from "styled-components"

export const SearchInputContainer = styled.form`
margin-top: -2rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`

export const SearchInputHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  h3 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`
