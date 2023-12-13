import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 40px;
`;

export const Output = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 20px;
  font-size: 60px;
  font-style: italic;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 40px;
    grid-gap: 15px;
  }
`;

export const FancyResultText = styled.span`
  color: ${({ theme }) => theme.colors.purple};
`;
