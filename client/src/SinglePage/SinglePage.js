import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../components/destinations/Sdata"
import EmptyFile from "../common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
import "./singlepage.css"

const SinglePage = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = Sdata.find((item) => item.id === parseInt(id))
        if (item) {
            setItem(item)
        }
    }, [id])

    return (
        <>
            {item ? (
                <section className='single-page'>
                    <img src={item.image} alt='' className="singlpage_main_img" />

                    <div className='container'>
                        {/* --------- main-content--------- */}
                        <h1>{item.title}</h1>
                        <article className='content'>
                            <div className='main_part'>
                                <p>{item.desc}</p>
                                <p>{item.desc}</p>

                                <div className='para'>
                                    <p>{item.sidepara}</p>
                                    <p>{item.sidepara}</p>
                                </div>
                                <h1>Whta is the {item.title} City ?</h1>
                                <p>{item.desc}</p>

                                <div className='image grid1 '>
                                    <img src={item.paraImage_one} alt='' />
                                    <img src={item.paraImage_two} alt='' />
                                </div>
                                <p>{item.desc}</p>
                            </div>
                            {/* --------- main-content--------- */}

                            {/* --------- side-content--------- */}
                            <div className='side_green_content'>
                                <div className='box'>
                                    <h2>How can we help you?</h2>
                                    <p>{item.sidepara}</p>
                                    <button className='outline-btn'>
                                        <i className='fa fa-phone-alt'></i> Contact Us
                                    </button>
                                </div>

                                <div className='box2'>
                                    <p>{item.sidepara}</p>
                                </div>
                                <div className='box3'>
                                    <a href="/"><button>Go to back</button></a>
                                </div>
                            </div>
                            {/* --------- side-content--------- */}
                        </article>

                    </div>
                </section>
            ) : (
                <EmptyFile />
            )}
        </>
    )
}

export default SinglePage
