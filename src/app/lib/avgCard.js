
import fetchPrice from './data';
import {Card, CardHeader, CardBody} from "@nextui-org/card";

const AvgCard = async ({avgData}) => {
  
  const jsonData= await fetchPrice();
  
    const latestDate = jsonData.prices.reduce((latest, entry) => {
      const entryDate = entry.startDate.slice(0, 10);
      return entryDate > latest ? entryDate : latest;
    }, '');

    
    const pricesForDate = jsonData.prices.filter(
      (entry) =>  entry.startDate.slice(0, 10) === latestDate.slice(0, 10)
    );

    const averagePrice = () => {
      return pricesForDate.reduce((sum, entry) => sum + entry.price , 0) /
      pricesForDate.length; 
    };


    

  return (
    <Card>
      {jsonData && (
        <>
          <CardHeader>
          <h2>Hinnan KA päivälle: {latestDate}</h2>
          </CardHeader>
          <CardBody>
          <p>Keskiarvo: {averagePrice().toFixed(2)} snt/kWh</p>
          </CardBody>
          </>
      )}
    </Card>
  );
};

export default AvgCard;