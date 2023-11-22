import styled from "styled-components";

export const Form = styled.form`
  background: ${({ theme }) => theme.white};
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Input = styled.input`
  padding: 20px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
`;
