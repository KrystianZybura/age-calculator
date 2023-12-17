import React from "react";
import { FancyResultText, Output, Wrapper } from "./styled";

const ResultSection = ({
  days,
  months,
  years,
}: {
  days: number;
  months: number;
  years: number;
}) => {
  return (
    <Wrapper>
      <Output>
        <FancyResultText>{years ?? "- -"}</FancyResultText>
        <span>Years</span>
      </Output>
      <Output>
        <FancyResultText>{months ?? "- -"}</FancyResultText>
        <span>Months</span>
      </Output>
      <Output>
        <FancyResultText>{days ?? "- -"}</FancyResultText>
        <span>Days</span>
      </Output>
    </Wrapper>
  );
};

export default ResultSection;
