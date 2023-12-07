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
import { useReducer, useState } from "react";
import ResultSection from "./ResultSection";
import { calculateResult } from "./calculateResult";
import React from "react";
import { ACTIONS } from "./actions";
import { reducer } from "./reducer";
import { BirthDate } from "./types";

const Form = () => {
  const [result, dispatch] = useReducer(reducer, {
    days: null,
    months: null,
    years: null,
  });

  const [inputDate, setInputDate] = useState<BirthDate>({
    day: null,
    month: null,
    year: null,
  });

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { years, months, days } = calculateResult(
      inputDate.year,
      inputDate.month,
      inputDate.day
    );

    dispatch({
      type: ACTIONS.CALCULATE_LIFETIME,
      payload: { years, months, days },
    });
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
