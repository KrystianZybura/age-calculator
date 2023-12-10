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
  isError: { invalidDay: boolean; invalidMonth: boolean; invalidYear: boolean };
};
