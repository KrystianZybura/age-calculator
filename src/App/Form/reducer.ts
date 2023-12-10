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

    case ACTIONS.SET_BIRTHDATE:
      return {
        ...state,
        birthdate: {
          day: payload.day || state.birthdate.day,
          month: payload.month || state.birthdate.month,
          year: payload.year || state.birthdate.year,
        },
      };

    default:
      return state;
  }
};
