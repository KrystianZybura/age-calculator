import {
  ButtonContainer,
  Button,
  StyledForm,
  InputsWrapper,
  Line,
  StyledInput,
  StyledLabel,
} from "./styled";

import Arrow from "../assets/arrowIcon.svg?react";
import Result from "./Result";
import { useState } from "react";

const Form = () => {
  const [inputDate, setInputDate] = useState({
    day: null,
    month: null,
    year: null,
  });

  return (
    <StyledForm onSubmit={(event) => event.preventDefault()}>
      <InputsWrapper>
        <StyledLabel htmlFor="day">
          Day
          <StyledInput
            onChange={({ target }) =>
              setInputDate((inputDate) => ({ ...inputDate, day: target.value }))
            }
            value={inputDate.day ?? ""}
            name="day"
            type="number"
            placeholder="DD"
            autoFocus
          />
        </StyledLabel>
        <StyledLabel htmlFor="month">
          Month
          <StyledInput
            onChange={({ target }) =>
              setInputDate((inputDate) => ({
                ...inputDate,
                month: target.value,
              }))
            }
            value={inputDate.month ?? ""}
            name="month"
            type="number"
            placeholder="MM"
          />
        </StyledLabel>
        <StyledLabel htmlFor="year">
          Year
          <StyledInput
            onChange={({ target }) =>
              setInputDate((inputDate) => ({
                ...inputDate,
                year: target.value,
              }))
            }
            value={inputDate.year ?? ""}
            name="year"
            type="number"
            placeholder="YYYY"
          />
        </StyledLabel>
      </InputsWrapper>
      <ButtonContainer>
        <Line />
        <Button>
          <Arrow />
        </Button>
      </ButtonContainer>
      <Result
        day={inputDate.day}
        month={inputDate.month}
        year={inputDate.year}
      />
    </StyledForm>
  );
};
export default Form;
