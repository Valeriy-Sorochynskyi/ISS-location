import { months, days } from '../constants/constands';

export const getFormatedDate = (date: Date): FormatedDate => {
  const day = days[date.getUTCDay()];
  const year = date.getUTCFullYear();
  const month = months[date.getUTCMonth()];
  const dayNumber = date.getUTCDate();
  let hours = date.getUTCHours().toString();
  let minutes = date.getUTCMinutes().toString();

  if (+hours < 10) {
    hours = `0${hours}`;
  }

  if (+minutes < 10) {
    minutes = `0${minutes}`;
  }

  const time = `${hours}:${minutes}`;

  return {
    time,
    day,
    dayNumber,
    month,
    year,
  };
};
