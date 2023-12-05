import data from './data';
export default function handler(req, res) {
    const { date, hour } = req.query;
  
    // Implement your search logic here
    const result = data.prices.find(
      (entry) =>
        entry.startDate === `${date}T${hour}:00:00.000Z` &&
        entry.endDate === `${date}T${(parseInt(hour) + 1).toString().padStart(2, '0')}:00:00.000Z`
    );
  
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Data not found for the specified date and hour.' });
    }
  }