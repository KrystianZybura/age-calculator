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
import { useState } from "react";
import ResultSection from "./ResultSection";
import { calculateResult } from "./calculateResult";
import React from "react";

const Form = () => {
  interface Data {
    day: any;
    month: any;
    year: any;
  }

  const [inputDate, setInputDate] = useState<Data>({
    day: undefined,
    month: undefined,
    year: undefined,
  });

  const [result, setResult] = useState({});

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { years, months, days } = calculateResult(
      inputDate.year,
      inputDate.month,
      inputDate.day
    );

    setResult({ years, months, days });
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <InputsWrapper>
        <StyledLabel htmlFor="day">
          Day
          <StyledInput
            onChange={({ target }) =>
              setInputDate((inputDate) => ({
                ...inputDate,
                day: +target.value,
              }))
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
                month: +target.value,
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
                year: +target.value,
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
      <ResultSection result={result} />
    </StyledForm>
  );
};
export default Form;
