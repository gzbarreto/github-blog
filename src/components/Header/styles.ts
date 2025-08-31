import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;

  background: ${(props) => props.theme["base-profile"]};

  img {
    width: 100%;
    object-fit: cover;
  }
`
