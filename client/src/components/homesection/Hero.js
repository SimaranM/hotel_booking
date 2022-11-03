import React from "react"
import Data from "./Data"
import "./home.css"
import Slide from "./Slide"

const Home = (setOptions) => {
  return (
    <>
      <Slide slides={Data} {...setOptions} />
    </>
  )
}

export default Home
