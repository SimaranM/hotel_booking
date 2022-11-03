import React from "react"
import Cards from "./Cards"
import "./gallery.css"
import GalleryData from "./GalleryData"


const Gallery = () => {
    return (
        <>
            <section className='gallery top'>
                <div className='container grid'>
                    {GalleryData.map((value) => {
                        return <Cards imgaes={value.img} title={value.title} />
                    })}
                </div>
            </section>
        </>
    )
}

export default Gallery
