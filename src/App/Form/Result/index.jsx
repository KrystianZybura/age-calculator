import { Output, OutputDescriber, ResultPlaceholder, Wrapper } from "./styled";

const Result = () => (
  <Wrapper>
    <Output>
      <ResultPlaceholder /> <ResultPlaceholder />
      <OutputDescriber>Years</OutputDescriber>
    </Output>
    <Output>
      <ResultPlaceholder /> <ResultPlaceholder />
      <OutputDescriber>Months</OutputDescriber>
    </Output>
    <Output>
      <ResultPlaceholder /> <ResultPlaceholder />
      <OutputDescriber>Days</OutputDescriber>
    </Output>
  </Wrapper>
);

export default Result;
