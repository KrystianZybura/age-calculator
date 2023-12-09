import { ACTIONS } from "./actions";
import { State } from "./types";

export const reducer = (
  state: State,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case ACTIONS.CALCULATE_LIFETIME:
      return {
        ...state,
        lifetime: {
          days: payload.days,
          months: payload.months,
          years: payload.years,
        },
      };

    case ACTIONS.SET_BIRTHDAY:
      return {
        ...state,
        birthdate: {
          day: payload.day,
          month: state.birthdate.month,
          year: state.birthdate.year,
        },
      };

    case ACTIONS.SET_BIRTHMONTH:
      return {
        ...state,
        birthdate: {
          day: state.birthdate.day,
          month: payload.month,
          year: state.birthdate.year,
        },
      };

    case ACTIONS.SET_BIRTHYEAR: {
      return {
        ...state,
        birthdate: {
          day: state.birthdate.day,
          month: state.birthdate.month,
          year: payload.year,
        },
      };
    }

    default:
      return state;
  }
};
