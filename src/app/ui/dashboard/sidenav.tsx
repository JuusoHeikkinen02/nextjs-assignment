import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav(){
    return(
        <div className="flex h-[200px] flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <NavLinks /> 
    </div>
    </div>
    );

}