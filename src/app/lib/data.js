


 async function fetchPrice(){
    const res = await fetch('https://api.porssisahko.net/v1/latest-prices.json', 
    {cache: 'no-cache'})
    const data= await res.json();
    
    return data;
}
function getPriceForDate(date, prices) {
    const matchingPriceEntry = prices.find(
      (price) => new Date(price.startDate) <= date && new Date(price.endDate) > date
    );
  
    if (!matchingPriceEntry) {
      throw 'Price for the requested date is missing';
    }
  
    return matchingPriceEntry.price;
  }
  
const { prices } = await fetchPrice();
      
export function cardData() {
  const now = new Date();
  const price = getPriceForDate(now, prices);
return price;

}

export default fetchPrice;