import React, { useState } from "react"
import Dcards from "./Dcards"
import "../gallery/gallery.css"
import "./destinations.css"
import Sdata from "./Sdata"

const AllItem = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <section className='gallery desi mtop'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem
