import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";

const isLeapYear = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const calculateResult = (
  declaredYear: number,
  declaredMonth: number,
  declaredDay: number
) => {
  const currentDate = new Date();
  const declaredDate = new Date(declaredYear, declaredMonth - 1, declaredDay);

  let daysInMonth: number = 30;

  switch (declaredMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      daysInMonth = 31;
      break;
    case 2:
      daysInMonth = isLeapYear(declaredYear) ? 29 : 28;
      break;
  }

  const yearsPassed = differenceInYears(currentDate, declaredDate);
  const monthsPassed = differenceInMonths(currentDate, declaredDate) % 12;
  const daysPassed = differenceInDays(currentDate, declaredDate) % daysInMonth;

  return { years: yearsPassed, months: monthsPassed, days: daysPassed };
};
