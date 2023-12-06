import { differenceInYears, differenceInMonths, differenceInDays, } from "date-fns";
export const calculateResult = (declaredYear, declaredMonth, declaredDay) => {
    const currentDate = new Date();
    const declaredDate = new Date(declaredYear, declaredMonth - 1, declaredDay);
    const yearsPassed = differenceInYears(currentDate, declaredDate);
    const monthsPassed = differenceInMonths(currentDate, declaredDate);
    const daysPassed = differenceInDays(currentDate, declaredDate);
    return { years: yearsPassed, months: monthsPassed, days: daysPassed };
};
