export type Payload = {
  days?: number;
  months?: number;
  years?: number;
  day?: string;
  month?: string;
  year?: string;
};

export type State = {
  lifetime: { days: number; months: number; years: number };
  birthdate: { day: string; month: string; year: string };
  isFormValid: {
    dayField: string | boolean;
    monthField: string | boolean;
    yearField: string | boolean;
  };
};

export type StyledComponentsProps = {
  $invalid?: boolean;
};
