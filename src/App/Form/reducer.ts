import { ACTIONS } from "./helpers/actions";
import {
  isDayValid,
  isMonthValid,
  isYearValid,
} from "./helpers/formValidation";

import { Payload, State } from "./helpers/types";

export const reducer = (
  state: State,
  { type, payload }: { type: string; payload: Payload }
) => {
  switch (type) {
    case ACTIONS.VALIDATE_FORM:
      return {
        ...state,
        isFormValid: {
          dayField: isDayValid(
            +state.birthdate.day,
            +state.birthdate.month,
            +state.birthdate.year
          ),
          monthField: isMonthValid(+state.birthdate.month),
          yearField: isYearValid(+state.birthdate.year),
        },
      };

    case ACTIONS.CALCULATE_LIFETIME:
      if (
        state.isFormValid.dayField !== true ||
        state.isFormValid.monthField !== true ||
        state.isFormValid.yearField !== true
      ) {
        return { ...state };
      }
      return {
        ...state,
        lifetime: {
          days: payload.days,
          months: payload.months,
          years: payload.years,
        },
      };

    case ACTIONS.SET_BIRTHDATE:
      return {
        ...state,
        birthdate: {
          day: payload.day === "" ? "" : payload.day || state.birthdate.day,
          month:
            payload.month === "" ? "" : payload.month || state.birthdate.month,
          year: payload.year === "" ? "" : payload.year || state.birthdate.year,
        },
      };

    default:
      return state;
  }
};
