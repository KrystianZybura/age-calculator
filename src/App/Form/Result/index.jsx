import { FancyResultText, Output, Wrapper } from "./styled";

const Result = ({ day, month, year }) => {
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

export default Result;
