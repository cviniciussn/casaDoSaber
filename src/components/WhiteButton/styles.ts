import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  color: black;
  font-family: "Cairo", sans-serif;
  font-size: 40px;
  padding: 10px;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: none;

  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;
