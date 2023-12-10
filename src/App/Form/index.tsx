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
import { useReducer } from "react";
import ResultSection from "./ResultSection";
import { calculateResult } from "./calculateResult";
import React from "react";
import { ACTIONS } from "./actions";
import { reducer } from "./reducer";

const Form = () => {
  const [{ lifetime, birthdate }, dispatch] = useReducer(reducer, {
    lifetime: { days: null, months: null, years: null },
    birthdate: { day: "", month: "", year: "" },
  });

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { years, months, days } = calculateResult(
      +birthdate.year,
      +birthdate.month,
      +birthdate.day
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
        </StyledLabel>
        <StyledLabel htmlFor="month">
          Month
          <StyledInput
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
        </StyledLabel>
        <StyledLabel htmlFor="year">
          Year
          <StyledInput
            onChange={({ target }) =>
              dispatch({
                type: ACTIONS.SET_BIRTHDATE,
                payload: { year: target.value },
              })
            }
            value={birthdate.year}
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
      <ResultSection result={lifetime} />
    </StyledForm>
  );
};

export default Form;
