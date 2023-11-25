import { FancyResultText, Output, Wrapper } from "./styled";

const ResultSection = ({ day, month, year }) => {
  return (
    <Wrapper>
      <Output>
        <FancyResultText>- -</FancyResultText>
        <span>Years</span>
      </Output>
      <Output>
        <FancyResultText>- -</FancyResultText>
        <span>Months</span>
      </Output>
      <Output>
        <FancyResultText>- -</FancyResultText>
        <span>Days</span>
      </Output>
    </Wrapper>
  );
};

export default ResultSection;
