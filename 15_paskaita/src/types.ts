export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// Union type

type Weekday =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export const isWeekend = (day: Weekday): boolean => {
  return day === "Saturday" || day === "Sunday";
};

type Applciation = {
  id: ApplicationId;
  type: ApplicationType;
  status: "STARTED" | "NOT_STARTED" | "FINISHED";
};

type ApplicationId = number;

type ApplicationType = "LOAN" | "REFINANCE" | "CAR_LEASING";

export const newApplication: Applciation = {
  id: 1,
  type: "REFINANCE",
  status: "STARTED",
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export interface CompanyV2 {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Human {
  isAlive: boolean;
}

export interface Employee extends Human {
  id: number;
  name: string;
  surname: string;
}

export interface AdminUser extends Employee {
  editRoles: string[];
}

export const human: Human = {
  isAlive: true,
};

export const employee: Employee = {
  id: 0,
  name: "",
  surname: "",
  isAlive: true,
};

export const manager: AdminUser = {
  id: 0,
  name: "",
  surname: "",
  isAlive: true,
  editRoles: [],
};

export type HumanV2 = {
  isAlive: boolean;
};

export type EmployeeV2 = {
  id: number;
  name: string;
  surname: string;
} & HumanV2;

export const bestEmployee: EmployeeV2 = {
  id: 0,
  name: "",
  surname: "",
  isAlive: true,
};

// enums

enum Weekdays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

type WeekdayV2 = keyof typeof Weekdays;

export const isWeekendV2 = (day: WeekdayV2): boolean => {
  return day === Weekdays.Saturday || day === Weekdays.Sunday;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEqualValues = (option: any) => {
  return isWeekendV2(option as WeekdayV2);
};
