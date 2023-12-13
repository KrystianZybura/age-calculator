import styled, { css } from "styled-components";
import { StyledComponentsProps } from "./helpers/types";
import ArrowSVG from "../assets/arrowIcon.svg?react";

export const StyledForm = styled.form`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 20px 20px 60px 20px;
  color: ${({ theme }) => theme.colors.offBlack};
  margin: 10px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 40px 20px;
  }
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 11px;
  }

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 13px;
    font-size: 18px;
  }

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 9px;
    margin-top: 5px;
  }

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
  align-self: center;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    justify-self: center;
  }
`;

export const Arrow = styled(ArrowSVG)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 30px;
    height: 25px;
  }
`;
