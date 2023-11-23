import styled from "styled-components";

export const Form = styled.form`
  background: ${({ theme }) => theme.white};
  padding: 40px;
  border-radius: 20px 20px 60px 20px;
  color: ${({ theme }) => theme.offBlack};
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 40px;
`;

export const StyledInput = styled.input`
  padding: 17px;
  border-radius: 7px;
  font-weight: bold;
  font-size: 23px;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  appearance: "textfield";

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus-visible {
    outline-color: ${({ theme }) => theme.purple};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.smokeyGrey};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 13px;
`;
