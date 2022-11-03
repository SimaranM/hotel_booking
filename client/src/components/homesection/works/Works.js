import React from "react"
import "../popular/mostpopular.css"
import "./works.css"
import Card from "./Card"
import Wdata from "./Wdata"
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <>
      <section className='popular works'>
        <div className='container'>
          <div className='heading'>
            <h1>Get inspiration for your next trip</h1>
            <div className='line'></div>
          </div>

          <div className='content grid'>
            {Wdata.map((value, index) => {
              return <Link to="/inspiration" target="_blank" ><Card key={index} cover={value.cover} title={value.title} desc={value.desc} /></Link>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Works
