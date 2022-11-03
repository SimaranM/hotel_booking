import React,{ useState } from "react";
import { Select, MenuItem,FormControl, InputLabel} from "@material-ui/core";
import "./filter.css";

const ApartmentTypeFilter=({setAllFilters})=>{
    const [selected,setSelected] = useState([]);
   
    const changeSelection= async (e)=>{
               setSelected(e.target.value)
               console.log(e.target.value);

            //get the values from previous filter and add new one;
                setAllFilters((prevState)=>({
                    ...prevState,
                    type:e.target.value
                }))
    }

    return(
        <>
            <FormControl variant="filled" className="dropdownForm">
                <InputLabel>Type </InputLabel>

             <Select multiple className="ClassNameTest" value={selected} label="Type" onChange={changeSelection}>
              <MenuItem selected value={"No filter"}> None</MenuItem> 
               <MenuItem value={"Hotel Room"}> Hotel Room</MenuItem>
               <MenuItem value={"Apartment"}>Apartment</MenuItem>
               <MenuItem value={"Camping Tent"}>Camping Tent</MenuItem>
               <MenuItem value={"Shared Room"}>Shared Room</MenuItem>
            </Select> 
            
            </FormControl>
            

        </>
    )
}

export default ApartmentTypeFilter;

