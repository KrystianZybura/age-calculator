import { FancyResultText, Output, Wrapper } from "./styled";
const ResultSection = ({ result }) => {
    var _a, _b, _c;
    return (<Wrapper>
      <Output>
        <FancyResultText>{(_a = result.years) !== null && _a !== void 0 ? _a : "- -"}</FancyResultText>
        <span>Years</span>
      </Output>
      <Output>
        <FancyResultText>{(_b = result.months) !== null && _b !== void 0 ? _b : "- -"}</FancyResultText>
        <span>Months</span>
      </Output>
      <Output>
        <FancyResultText>{(_c = result.days) !== null && _c !== void 0 ? _c : "- -"}</FancyResultText>
        <span>Days</span>
      </Output>
    </Wrapper>);
};
export default ResultSection;
