import React from "react"
import Cards from "./Cards"
import "./mostpopular.css"

const MostPopular = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>Accomodation Options</h1>
            <div className='line'></div>
          </div>

          <div className='content'>
            <Cards />
          </div>
        </div>
      </section>
    </>
  )
}

export default MostPopular
