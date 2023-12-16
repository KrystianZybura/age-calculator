import { isLeapYear } from "./isLeapYear";

export const isDayValid = (day: number, month: number, year: number) => {
  if (!day) {
    return "This field is required";
  }

  if (day < 1 || day > 31) {
    return "Must be a valid day";
  }

  if (month) {
    switch (month) {
      case 2:
        const daysInMonth = isLeapYear(year) ? 29 : 28;
        if (day < 1 || day > daysInMonth) {
          return "Must be a valid day";
        }
        break;

      case 4:
      case 6:
      case 9:
      case 11:
        if (day < 1 || day > 30) {
          return "Must be a valid day";
        }
        break;

      default:
        if (day > 31) {
          return "Must be a valid day";
        }
    }
  }

  return true;
};

export const isMonthValid = (month: number) => {
  if (!month) {
    return "This field is required";
  }

  return month < 1 || month > 12 ? "Must be a valid month" : true;
};

export const isYearValid = (year: number) => {
  if (!year) {
    return "This field is required";
  }

  return year > new Date().getFullYear() ? "Must be in the past" : true;
};
