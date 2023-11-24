import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 40px;
`;

export const Output = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 20px;
`;

export const OutputDescriber = styled.span`
  font-size: 60px;
  font-style: italic;
  font-weight: 700;
`;

export const ResultPlaceholder = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.purple};
  height: 15px;
  width: 50px;
  align-self: center;
  transform: skewX(-20deg);
`;
