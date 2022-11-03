import React from "react";
import PriceSlider from "./PriceSlider";
import ApartmentTypeFilter from "./ApartmentTypeFilter";
import KeywordFilter from "./keyword";
import "./filter.css"

const Filter=({setAllFilters})=>{
    return(<>
       {/* <div className="filterContainer">
           <PriceSlider />
           <ApartmentTypeFilter setAllFilters={setAllFilters} />
           <KeywordFilter setAllFilters={setAllFilters} />

       </div> */}
    </>)
}
export default Filter;