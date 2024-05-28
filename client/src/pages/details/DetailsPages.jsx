import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

import Link from '@mui/material/Link';

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
              <p>Read More on:</p>
              
              <Link href="https://economictimes.indiatimes.com/news/politics?from=mdr" underline="hover">
  {'Tap On this Link To Learn More About..'}
</Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
