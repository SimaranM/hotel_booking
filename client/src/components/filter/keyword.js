import React,{ useState } from "react";
import { Select, MenuItem,FormControl, InputLabel} from "@material-ui/core";
import "./filter.css";

const KeywordFilter=({setAllFilters})=>{
    const [selected,setSelected] = useState([]);
    // const [filterChoices, setFilterChoices] = useState(["Hotel Room", "Apartment"]);
    const changeSelection= async (e)=>{
               setSelected(e.target.value)
               console.log(e.target.value);

            //    setFilterChoices(e.target.value);
            setAllFilters((prevState)=>({
                ...prevState,
                keyword:e.target.value
            }))
}         
    

    //const ApartmentTypes=["Hotel Room","Apartment","Camping Tent","Shared Room"]
    return(
        <>
            <FormControl variant="filled" className="dropdownForm">
                <InputLabel>Features</InputLabel>

            <Select multiple className="ClassNameTest" value={selected} label="Type" onChange={changeSelection}>
                <MenuItem selected value={"No filter"}> None</MenuItem> 
               <MenuItem value={"Luxurious"}>Luxurious</MenuItem>
               <MenuItem value={"Kid friendly"}>Kid friendly</MenuItem>
               <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
               <MenuItem value={"Wedding"}>Wedding</MenuItem>
            </Select>

            </FormControl>
            

        </>
    )
}

export default KeywordFilter;

