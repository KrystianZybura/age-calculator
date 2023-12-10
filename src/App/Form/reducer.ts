import { ACTIONS } from "./actions";
import { Payload, State } from "./types";

export const reducer = (
  state: State,
  { type, payload }: { type: string; payload: Payload }
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
          day: payload.day || payload.day === "" || state.birthdate.day,
          month: payload.month || payload.month === "" || state.birthdate.month,
          year: payload.year || payload.year === "" || state.birthdate.year,
        },
      };

    default:
      return state;
  }
};
