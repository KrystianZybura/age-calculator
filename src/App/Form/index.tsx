import {
  ButtonContainer,
  Button,
  StyledForm,
  InputsWrapper,
  Line,
  StyledInput,
  StyledLabel,
  InvalidInputText,
  Arrow,
} from "./styled";

import { useReducer } from "react";
import ResultSection from "./ResultSection";
import { calculateResult } from "./helpers/calculateResult";
import React from "react";
import { ACTIONS } from "./helpers/actions";
import { reducer } from "./reducer";

const Form = () => {
  const [{ lifetime, birthdate, isFormValid }, dispatch] = useReducer(reducer, {
    lifetime: { days: null, months: null, years: null },
    birthdate: { day: "", month: "", year: "" },
    isFormValid: {
      dayField: true,
      monthField: true,
      yearField: true,
    },
  });

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { years, months, days } = calculateResult(
      +birthdate.year,
      +birthdate.month,
      +birthdate.day
    );

    dispatch({
      type: ACTIONS.VALIDATE_FORM,
      payload: {},
    });

    dispatch({
      type: ACTIONS.CALCULATE_LIFETIME,
      payload: { years, months, days },
    });
  };

  return (
    <StyledForm onSubmit={onFormSubmit} noValidate>
      <InputsWrapper>
        <StyledLabel $invalid={isFormValid.dayField !== true} htmlFor="day">
          Day
          <StyledInput
            $invalid={isFormValid.dayField !== true}
            onChange={({ target }) =>
              dispatch({
                type: ACTIONS.SET_BIRTHDATE,
                payload: { day: target.value },
              })
            }
            value={birthdate.day}
            required
            max={31}
            min={1}
            name="day"
            type="number"
            placeholder="DD"
            autoFocus
          />
          <InvalidInputText $invalid={isFormValid.dayField !== true}>
            {isFormValid.dayField !== true ? isFormValid.dayField : ""}
          </InvalidInputText>
        </StyledLabel>
        <StyledLabel $invalid={isFormValid.monthField !== true} htmlFor="month">
          Month
          <StyledInput
            $invalid={isFormValid.monthField !== true}
            onChange={({ target }) =>
              dispatch({
                type: ACTIONS.SET_BIRTHDATE,
                payload: { month: target.value },
              })
            }
            value={birthdate.month}
            required
            min={1}
            max={12}
            name="month"
            type="number"
            placeholder="MM"
          />
          <InvalidInputText $invalid={isFormValid.monthField !== true}>
            {isFormValid.monthField !== true ? isFormValid.monthField : ""}
          </InvalidInputText>
        </StyledLabel>
        <StyledLabel $invalid={isFormValid.yearField !== true} htmlFor="year">
          Year
          <StyledInput
            $invalid={isFormValid.yearField !== true}
            onChange={({ target }) =>
              dispatch({
                type: ACTIONS.SET_BIRTHDATE,
                payload: { year: target.value },
              })
            }
            value={birthdate.year}
            required
            min={1900}
            max={new Date().getFullYear()}
            name="year"
            type="number"
            placeholder="YYYY"
          />
          <InvalidInputText $invalid={isFormValid.yearField !== true}>
            {isFormValid.yearField !== true ? isFormValid.yearField : ""}
          </InvalidInputText>
        </StyledLabel>
      </InputsWrapper>
      <ButtonContainer>
        <Line />
        <Button>
          <Arrow />
        </Button>
      </ButtonContainer>
      <ResultSection result={lifetime} />
    </StyledForm>
  );
};

export default Form;
