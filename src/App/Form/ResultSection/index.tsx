import React from "react";
import { FancyResultText, Output, Wrapper } from "./styled";

const ResultSection = ({ result }) => {
  return (
    <Wrapper>
      <Output>
        <FancyResultText>{result.years ?? "- -"}</FancyResultText>
        <span>Years</span>
      </Output>
      <Output>
        <FancyResultText>{result.months ?? "- -"}</FancyResultText>
        <span>Months</span>
      </Output>
      <Output>
        <FancyResultText>{result.days ?? "- -"}</FancyResultText>
        <span>Days</span>
      </Output>
    </Wrapper>
  );
};

export default ResultSection;
