import { Form, InputsWrapper, StyledInput, StyledLabel } from "./styled";

function App() {
  return (
    <Form>
      <InputsWrapper>
        <StyledLabel htmlFor="day">
          Day
          <StyledInput name="day" type="number" placeholder="DD" autoFocus />
        </StyledLabel>

        <StyledLabel htmlFor="month">
          Month
          <StyledInput name="month" type="number" placeholder="MM" />
        </StyledLabel>

        <StyledLabel htmlFor="year">
          Year
          <StyledInput name="year" type="number" placeholder="YYYY" />
        </StyledLabel>
      </InputsWrapper>
    </Form>
  );
}

export default App;
