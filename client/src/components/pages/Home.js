import React from "react"
import "../../App.css"
import Hero from "../homesection/Hero"
 import MostPopular from "../homesection/popular/MostPopular"
 import DestinationHome from "../homesection/destina/DestinationHome"
 import Works from "../homesection/works/Works"

const Home = (setOptions) => {
  return (
    <>
      <Hero {...setOptions} />
      <MostPopular />
      <DestinationHome />
      <Works />
    </>
  )
}

export default Home
