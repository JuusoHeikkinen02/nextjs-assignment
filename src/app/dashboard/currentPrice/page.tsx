
import CurrentDate from "@/app/ui/nextDate/current";
import fetchPrice from "@/app/lib/data";
import PriceList from "@/app/lib/placeholder-data"

export default async  function Page() {
   const prices= await fetchPrice();
   
    return (
        <div>
      <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
      <CurrentDate/>
      </p> 
      <PriceList data={prices.prices}/>
      </div>
      );
  }