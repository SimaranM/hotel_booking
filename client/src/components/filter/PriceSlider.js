import React, {useState} from 'react';
import { Slider } from '@material-ui/core';
import "./filter.css"


const PriceSlider= () =>{

   const [val,setVal]=useState([50,150]);
   const updateRange=(e,data)=>{
          setVal(data);
   }
    const getText=(value)=>`${val}`;
    
    return(
    <div className="priceSlide" >
          <Slider value={val}
          min={0}
          max={500}
          step={20}
          getAriaValueText={getText}
          valueLabelDisplay='auto'

           onChange={updateRange}/>
    </div>);
     
    
};
export default PriceSlider;