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

  const [birthDate, setBirthDate] = useState<BirthDate>({
    day: "",
    month: "",
    year: "",
  });

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { years, months, days } = calculateResult(
      +birthDate.year,
      +birthDate.month,
      +birthDate.day
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
              setBirthDate((birthDate) => ({
                ...birthDate,
                day: target.value,
              }))
            }
            value={birthDate.day}
            required
            max={31}
            min={1}
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
              setBirthDate((birthDate) => ({
                ...birthDate,
                month: target.value,
              }))
            }
            value={birthDate.month}
            required
            min={1}
            max={12}
            name="month"
            type="number"
            placeholder="MM"
          />
        </StyledLabel>
        <StyledLabel htmlFor="year">
          Year
          <StyledInput
            onChange={({ target }) =>
              setBirthDate((birthDate) => ({
                ...birthDate,
                year: target.value,
              }))
            }
            value={birthDate.year}
            required
            max={new Date().getFullYear()}
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
