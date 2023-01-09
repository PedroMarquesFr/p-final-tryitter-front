import styled from "styled-components";

export const Container = styled.div`
  margin: 10px auto;
  color: white;
  height: 30px;
  width: 30px;
  background: transparent;
  border-radius: 50%;
  border: 10px solid transparent;
  border-color: #039be5 #039be5 transparent transparent;
  animation: load8 1s infinite;

  @keyframes load8 {
    100% {
      transform: rotatez(360deg);
    }
  }
`;
