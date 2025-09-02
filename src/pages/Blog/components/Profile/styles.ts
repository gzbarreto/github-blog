import styled from "styled-components"

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  position: relative;
  top: -5rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  margin-top: 0.5rem;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 0.5rem;
  }

  div {
  }
`
export const ProfileName = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};

    svg {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`
