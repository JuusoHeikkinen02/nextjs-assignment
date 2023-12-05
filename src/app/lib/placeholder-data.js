
const PriceList = ({data})=>{
    const formatHour = (date)=> {
        return date.toLocaleString(undefined, {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          });
    }
    const reversedData =data.reverse();
    

    return (
        <div>
        <h1>Price List</h1>
        <br/>
        <ul>
          {reversedData.map((priceData, index) => (
            <li key={index}>
              <p>Hinta: {priceData.price} snt/kWh</p>
              <th/>
              <p>Aikaväli: {formatHour(new Date(priceData.startDate))}-{formatHour(new Date(priceData.endDate))} 
              </p>
              <br/>
            </li>
          ))}
        </ul>
      </div>
    )
};
export default PriceList;