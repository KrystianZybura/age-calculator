import {
  ButtonContainer,
  Button,
  Form,
  InputsWrapper,
  Line,
  StyledInput,
  StyledLabel,
} from "./styled";

import Arrow from "../assets/arrowIcon.svg?react";

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
      <ButtonContainer>
        <Line />
        <Button>
          <Arrow />
        </Button>
      </ButtonContainer>
    </Form>
  );
}

export default App;
