'use client';
import { useState } from 'react';

const formatDate = (inputDate) => {
  if (!inputDate) {
    throw new Error('Date cannot be empty.');
  }

  const [year, month, day] = inputDate.split('-');

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error('Invalid date format.');
  }

  const paddedMonth = month.padStart(2, '0');
  const paddedDay = day.padStart(2, '0');

  return `${year}-${paddedMonth}-${paddedDay}`;
};

const formatHour = (inputHour) => {
  if (!inputHour) {
    throw new Error('Hour cannot be empty.');
  }

  const parsedHour = parseInt(inputHour);

  if (isNaN(parsedHour) || parsedHour < 0 || parsedHour > 23) {
    throw new Error('Invalid hour format. Must be a number between 0 and 23.');
  }

  return parsedHour.toString().padStart(2, '0');
};



const Search = ({ data }) => {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const formattedDate = formatDate(date);
      const formattedHour = formatHour(hour.toString());

      const foundResult = data.find(
        (entry) =>
        entry.startDate === `${formattedDate}T${formattedHour}:00:00.000Z` 

      );

      if (foundResult) {
        setResult(foundResult);
      } else {
        setError('Data not found for the specified date and hour.');
      }
    } catch (error) {
      setError(error.message);
    } 
  };

  return (
    <div>
      <label>
        Päivä:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Tunti 0-23:
        <input type="number" value={hour} onChange={(e) => setHour(e.target.value)} />
      </label>
      <button onClick={handleSearch}>
        Etsi
      </button>

      {error && <p>Error: {error.message}</p>}

      {result && (
        <div>
          <p>Hinta: {result.price.toFixed(2)}snt/kWh</p>
          <p>Start Date: {result.startDate}</p>
          
        </div>
      )}
    </div>
  );
};

export default Search;