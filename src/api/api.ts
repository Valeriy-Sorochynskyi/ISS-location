const CURRENT_LOCATION_URL = 'https://api.open-notify.org/iss-now.json';
const PEOPLE_IN_SPACE_URL = 'https://api.open-notify.org/astros.json';

const getData = <T>(url: string): Promise<T> => {
  return fetch(url)
    .then(response => response.json());
};

export const getIssData = (): Promise<IssData> => {
  return getData(CURRENT_LOCATION_URL);
};

export const getPeopleInSpaceData = (): Promise<PeopleData> => {
  return getData(PEOPLE_IN_SPACE_URL);
};
