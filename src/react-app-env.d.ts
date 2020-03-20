/// <reference types="react-scripts" />

interface IssPosition {
  longitude: string;
  latitude: string;
}

interface IssData {
  timestamp: number;
  message: string;
  // eslint-disable-next-line camelcase
  iss_position: IssPosition;
}

interface Person {
  craft: string;
  name: string;
}

interface PeopleData {
  messege: string;
  number: number;
  people: Person[];
}

interface FormatedDate {
  time: string;
  day: string;
  dayNumber: number;
  month: string;
  year: number;
}
