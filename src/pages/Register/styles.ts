import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: min(60vw, 500px);
  margin: auto;
`;

export const TextInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 1px solid var(--gray);
  border-radius: 6px;
  &::placeholder {
    color: var(--gray);
  }
  margin: 6px auto 6px;
  padding: 10px; 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Submit = styled.button`
  background-color: var(--twitter);
  width: 120px;
  height: 40px;
  font-size: var(--search);
  color: black;
  font-weight: 700;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: var(--twitter-light-hover);
  }
  &:disabled {
    background-color: var(--gray);
    color: var(--outline);
  }
`;
