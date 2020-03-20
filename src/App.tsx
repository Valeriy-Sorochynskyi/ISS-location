import React, { FC, useState, useEffect, useMemo } from 'react';
import MapContainer from './components/MapContainer';
import { getIssData, getPeopleInSpaceData } from './api/api';
import { getFormatedDate } from './utils/utils';
import { initLocation } from './constants/constands';
import './App.css';

const App: FC = () => {
  const [currentLocation, setCurrentLocation] = useState(initLocation);
  const [date, setDate] = useState<FormatedDate>(getFormatedDate(new Date()));
  const [people, setPeople] = useState<Person[]>([]);

  const loadAndSetData = () => {
    Promise.all([getIssData(), getPeopleInSpaceData()])
      .then(([IssData, PeopleInSpaceData]) => {
        const currentDate = new Date(IssData.timestamp * 1000);

        setDate(getFormatedDate(new Date(currentDate)));
        setCurrentLocation({
          lat: +IssData.iss_position.latitude,
          lng: +IssData.iss_position.longitude,
        });

        setPeople(PeopleInSpaceData.people);
      });
  };

  useEffect(() => {
    loadAndSetData();
    const interval = setInterval(
      loadAndSetData, 5000,
    );

    return () => clearInterval(interval);
  }, []);

  const issPeople = useMemo(() => people
    .filter(person => person.craft === 'ISS'), [people]);

  return (
    <>
      <h1 className="app-heading">ISS Location</h1>
      <div className="app">
        <div className="heading">
          <div className="map-heading">
            <h3>ISS is now located at:</h3>
            <p className="location-info">
              {`longitude: ${currentLocation.lng} 
                latitude: ${currentLocation.lat}`}
            </p>
          </div>
          <div className="date-heading">
            <h3>{`Current UTC time: ${date.time}`}</h3>
            <p>
              {`${date.day}, ${date.dayNumber}
                 ${date.month} ${date.year}`}
            </p>
          </div>
        </div>
        <div className="container">
          <section className="map-wrapper">
            <MapContainer
              initLocation={initLocation}
              currentLocation={currentLocation}
            />
          </section>
          <aside className="people">
            <ul className="people-list">
              {issPeople.map(person => (
                <li className="person" key={person.name}>
                  {person.name}
                </li>
              ))}
            </ul>
            <div>
              {`Total amount: ${issPeople.length} people on ISS`}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default App;
