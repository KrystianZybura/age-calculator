import styled, { css } from "styled-components";
import { StyledComponentsProps } from "./helpers/types";

export const StyledForm = styled.form`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 20px 20px 60px 20px;
  color: ${({ theme }) => theme.colors.offBlack};
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-gap: 40px;
`;

export const StyledLabel = styled.label<StyledComponentsProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.colors.smokeyGrey};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 13px;

  ${({ $invalid }) =>
    $invalid &&
    css`
      color: ${({ theme }) => theme.colors.lightRed};
    `}
`;

export const StyledInput = styled.input<StyledComponentsProps>`
  padding: 17px;
  border-radius: 7px;
  font-weight: bold;
  font-size: 23px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  appearance: "textfield";

  ${({ $invalid }) =>
    $invalid &&
    css`
      border-color: ${({ theme }) => theme.colors.lightRed};
    `}

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
    outline-color: ${({ theme }) => theme.colors.purple};
  }
`;

export const InvalidInputText = styled.span<StyledComponentsProps>`
  display: none;
  color: ${({ theme }) => theme.colors.lightRed};
  font-style: italic;
  font-weight: normal;
  text-transform: none;
  font-size: 12px;
  margin-top: 10px;
  letter-spacing: normal;

  ${({ $invalid }) =>
    $invalid &&
    css`
      display: inline;
    `}
`;

export const ButtonContainer = styled.div`
  margin: 40px 0 20px;
  display: grid;
  justify-items: end;
`;

export const Line = styled.span`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.smokeyGrey};
  width: 100%;
`;

export const Button = styled.button`
  position: absolute;
  z-index: 2;
  padding: 15px;
  border: none;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 50px;
  cursor: pointer;
  align-self: center;
`;
