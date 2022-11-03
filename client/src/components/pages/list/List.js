import "./list.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchItem from "../../searchItem/SearchItem";
import Filter from "../../filter/Filter";
import axios from 'axios';
import { data } from "autoprefixer";
import { id } from "date-fns/locale";
import cartdata from "../../../data";


const List = ({destination, openDate, date, openOptions, options, handleClick}) => {
  const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);

  //console.log(setAllFilters);

  const [disPlayedProprties, setDisPlayedProprties] = useState([]);

  const [allProperties, setAllProperties] = useState([]);
  const [search, setSearch] = useState("");

  const [searchParam, setSearchParam] = useState('location')

  useEffect(async () => {
    try {
      await axios.get(`http://localhost:3200/property`)
        .then((response) => {
          const property = response.data;
          setAllProperties(property);
          setDisPlayedProprties((previous) => {
            console.log(destination, property.location)
            return response.data.filter(property => destination.toLowerCase() === property.location.toLowerCase());
          })
           console.log(destination)
        })
    } catch (error) {

      console.log(error.message);
    }
  }, [])


  const [allFilters, setAllFilters] = useState({
    keyword: [],
    type: [],
    price: [],
    rating: ""
  });
  /*
    useEffect(() => {
      console.log(allFilters);
      allProperties && allProperties.filter((property) => allFilters.type.includes(property.type) && allFilters.keyword.includes(property.keyword) && allFilters.rating.includes(property.rating));
  
    }, [allFilters])*/
   console.log(allProperties);
  console.log(date);



  // ---------------------------------------------------------------all property------------------
  let filteredProperties;
  //const filtered=allProperties && allProperties.map(property=> <SearchItem key={property._id}  property={property}/>);
  if (!destination) {
    filteredProperties = allProperties;
  } else {
    filteredProperties = allProperties && allProperties.filter(property => destination.toLowerCase() === property.location.toLowerCase());
  }
  // filteredProperties = allProperties && allProperties.filter(property => destination.toLowerCase() === property.location.toLowerCase());
  // ---------------------------------------------------------------all property------------------

  return (
    <>
      <div>
        <Filter setAllFilters={setAllFilters} />
      </div>
      <section className='about top'>
        <div className='container'>
          <div className="listContainer">
            <div className="listWrapper">
              <div className="listResult">
                {/*{filtered}*/}
                {/* ---------------------------------------------------------------all property------------------ */}
                {filteredProperties.map((property) => (
                  <SearchItem key={property._id} property={property} handleClick={handleClick} />
                ))}
                {/* ---------------------------------------------------------------all property------------------ */}

                {/* {allProperties && allProperties.filter((property) => {
                  destination.toLowerCase() === property.location.toLowerCase() && <SearchItem property={property} />
                })} */}
                {/* -------------------cart------------ */}
                {/* <div className="cart_cards products_card">
                  {disPlayedProprties.map((property) => (
                    <SearchItem key={property.id} property={property} handleClick={handleClick} />
                  ))}
                </div> */}

                {/* -------------------cart.--------------- */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default List;