import { ACTIONS } from "./actions";

interface Lifetime {
  days: number;
  months: number;
  years: number;
}

export const reducer = (
  state: Lifetime,
  { type, payload }: { type: string; payload: Lifetime }
) => {
  switch (type) {
    case ACTIONS.CALCULATE_LIFETIME:
      if (!payload.days || !payload.months || !payload.years) {
        return state;
      }

      return {
        ...state,
        days: payload.days,
        months: payload.months,
        years: payload.years,
      };

    default:
      return state;
  }
};
