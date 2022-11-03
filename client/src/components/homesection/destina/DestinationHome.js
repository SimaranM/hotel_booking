import React from "react"
import "../popular/mostpopular.css"
//import Dcards from "../../Destinations/Dcards"
import AllItem from "../../destinations/AllItem"

const DestinationHome = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>Top Destinations</h1>
            <div className='line'></div>
          </div>

          <div className='content'>
            <AllItem />
          </div>
        </div>
      </section>
    </>
  )
}

export default DestinationHome
