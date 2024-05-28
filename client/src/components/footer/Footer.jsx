import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>Adiraju Sri Varshini- 21bce8109</p>
          <div className='social'>
           <a href="https://www.instagram.com/27_varshu_04/"> <BsFacebook className='icon' /> </a>
           <a href="https://www.instagram.com/27_varshu_04/"> <RiInstagramFill className='icon' /></a>
           <a href="https://www.instagram.com/27_varshu_04/"> <AiFillTwitterCircle className='icon' /></a>
           <a href="https://www.instagram.com/27_varshu_04/"> <AiFillLinkedin className='icon' /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
