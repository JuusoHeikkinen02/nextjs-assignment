import fetchPrice from "../lib/data"
import MyCard from "@/app/lib/card"
import BarChart from "@/app/lib/chart";
import AvgCard from "@/app/lib/avgCard";

export default async function Page() {
    const prices= await fetchPrice();
    


    return(
        <>
        <h1 className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            Pörssisähkö</h1>
        <BarChart data={prices.prices}/>  
    <div className="flex">
        <div className="flex-1">
            <MyCard data={prices.prices}/>
         </div>
        <div className="flex-1">
            <AvgCard avgData={prices.prices}/>
        </div>
     </div>
        </>
    )
}