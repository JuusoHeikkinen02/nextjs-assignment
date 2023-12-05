import Search from '@/app/lib/priceSearch';
import fetchPrice from '@/app/lib/data';


export default async function Page() {
    const prices=await fetchPrice();
    return(
      <div>
        <h1>Hinnan Haku </h1>
        <Search data={prices.prices}/>
      </div>
    );
  }